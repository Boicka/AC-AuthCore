# ADR-002 - Repository Architecture

## Status

Accepted

## Date

2026-08-12

## Decision Makers

- Tech Lead
- Developer

## Context

AuthCore is designed as a platform composed of multiple applications and shared resources that need to evolve together.

The repository structure must support independent applications, shared code, and centralized development tooling while remaining simple and maintainable as the project grows.

## Alternatives Considered

### Multirepo

Each application and shared resource would be maintained in an independent repository.

### Monorepo

All AuthCore applications and shared packages would be maintained within a single repository.

## Decision

AuthCore will use a monorepo managed with pnpm Workspaces.

The initial repository structure will be organized into applications and shared packages:

- `apps/api` — Fastify backend application.
- `apps/admin` — Angular administration application.
- `packages/shared-types` — Shared type definitions used by multiple applications.

The repository will follow a minimal structure and new packages will only be introduced when a concrete need exists.

## Tooling Decisions

### Turborepo

Turborepo will not be introduced initially.

It will be evaluated if the repository grows enough to benefit from task orchestration and build caching.

### Biome

Biome will be used as the project's linter and formatter.

It provides both capabilities through a single tool and keeps the initial development setup simple.

### Shared Configuration

Common configuration files such as Biome and TypeScript configuration will remain at the repository root initially.

A dedicated configuration package will only be introduced if a concrete need arises.

## Consequences

This architecture provides a single repository for coordinating AuthCore applications and shared packages.

It simplifies sharing code and maintaining consistency between related projects.

The monorepo also introduces the responsibility of keeping dependencies, package boundaries, and repository structure well organized as the project grows.

## Related ADRs

- ADR-001 - Project Foundation
