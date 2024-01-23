# Automated User Creation for Notification Testing

## Overview

This project leverages Cypress, GitHub Actions, and cypress-parallel to automate the creation of 200k+ users through a user creation API. The primary goal is to observe the system's behavior under high load conditions and ensure the successful delivery of notifications to all users. The workflow is configured to run in parallel for efficient testing, and a cronjob triggers it every 6 hours to simulate continuous load testing.

## Project Structure

- **cypress/**
 - **e2e/**: Holds Cypress test scripts.
  - **fixtures/**: Contains data for test scenarios.
  - **support/**: Includes utility files and custom commands.

- **.github/**
  - **workflows/**: GitHub Actions workflow configuration.

- **cypress.json**: Cypress configuration file.
- **.gitignore**: Specifies files to be ignored by Git.
- **.github/workflows/test.yml**: GitHub Actions workflow configuration for parallel test execution.


