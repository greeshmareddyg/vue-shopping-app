// tests/setup.js
import { config } from "@vue/test-utils";
import { vi } from "vitest";
import { createPinia } from "pinia";

config.global.plugins = [createPinia()];

// Mock any necessary globals or setup steps here
global.fetch = vi.fn();
