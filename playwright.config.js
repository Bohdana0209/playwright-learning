// @ts-check
import { defineConfig, devices } from '@playwright/test';
import config from './config/config.js';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 3,
  reporter: 'html',

  // ГЛОБАЛЬНО
  use: {
    baseURL: config.baseURL,
    httpCredentials: config.httpCredentials,
    headless: true, // default
    viewport: { width: 1280, height: 720 },
    trace: 'on',
    video: 'on',
    screenshot: 'on',
  },

  projects: [
    // 🟢 SETUP
    {
      name: 'setup',
      testMatch: /\/tests\/setup\/.*\.setup\.js/,
      use: {
        ...devices['Desktop Chrome'],
        headless: true,          // 🔥 КЛЮЧОВО
      },
    },

    // 🟢 SMOKE
    {
      name: 'smoke',
      dependencies: ['setup'],
      grep: /@my-label/,
      use: {
        ...devices['Desktop Chrome'],
        headless: true,          // 🔥 КЛЮЧОВО
        viewport: { width: 1920, height: 1080 },
        trace: 'on',
        screenshot: { mode: 'on', fullPage: true },
      },
    },

    // 🟢 REGRESSION
    {
      name: 'regression',
      dependencies: ['setup'],
      grepInvert: /@my-label/,
      use: {
        ...devices['Desktop Chrome'],
        headless: true,          // 🔥 КЛЮЧОВО
      },
    },
  ],
});
