import fs from 'node:fs';

import type { DataObject } from 'json2md';
import json2md from 'json2md';
import { remark } from 'remark';
import remarkToc from 'remark-toc';

import { CONFIGS } from '@/configs';
import { buildCleanCommand, buildSetupCommand } from '@/helpers/commands';
import { DEFAULT_OUTPUT_FILE_NAME } from '@/models/configs.constants';
import type { Configs } from '@/models/configs.types';
import { resolveCwd } from '@/utils/paths';

const CODE_LANGUAGE = 'bash';

async function getMarkdown(configs: Configs) {
  const tools: DataObject[] = [];
  const allSetupCommands: string[] = [];
  const allCleanCommands: string[] = [];

  for (const config of configs) {
    const { name, url, pkg = {}, filePaths = [], setup, clean } = config;
    const setupCommands = setup.map((item) =>
      buildSetupCommand({ name, pkg, filePaths, setupCommandAction: item }),
    );
    const cleanCommands = clean.map((item) =>
      buildCleanCommand({
        name,
        pkg,
        filePaths,
        cleanCommandAction: item,
      }),
    );

    const section: DataObject[] = [
      {
        h3: url ? `[${name}](${url})` : name,
      },
      {
        p: 'Setup',
      },
      {
        code: {
          language: CODE_LANGUAGE,
          content: setupCommands.join('\n\n'),
        },
      },
      {
        p: 'Clean',
      },
      {
        code: {
          language: CODE_LANGUAGE,
          content: cleanCommands.join('\n\n'),
        },
      },
    ];
    tools.push(section);

    allSetupCommands.push(`# ${name}`, ...setupCommands);
    allCleanCommands.push(`# ${name}`, ...cleanCommands);
  }

  const data = [
    { h1: 'Configs' },
    { h2: 'Table of Contents' },
    // single
    { h2: 'Tools' },
    ...tools,
    // all
    { h2: 'All' },
    { h3: 'Setup' },
    {
      code: {
        language: CODE_LANGUAGE,
        content: allSetupCommands.join('\n\n'),
      },
    },
    { h3: 'Clean' },
    {
      code: {
        language: CODE_LANGUAGE,
        content: allCleanCommands.join('\n\n'),
      },
    },
  ];

  const markdown = json2md(data);
  const processed = await remark().use(remarkToc).process(markdown);

  return String(processed);
}

interface WriteMarkdownOptions {
  filePath: string;
  content: string;
}

function writeMarkdown({ filePath, content }: WriteMarkdownOptions) {
  fs.writeFile(filePath, content, (error) => {
    if (!error) {
      return;
    }
    console.error(error);
  });
}

async function writeMarkdownWithDefaults(options?: { filePath?: string | undefined }) {
  const filePath = options?.filePath ?? resolveCwd(DEFAULT_OUTPUT_FILE_NAME);
  const content = await getMarkdown(CONFIGS);
  writeMarkdown({ filePath, content });
}

export { getMarkdown, writeMarkdown, writeMarkdownWithDefaults };
