import { describe, it, expect } from 'vitest';
import { PROJECT_DATA } from '@/data/projects';
import type { Project } from '@/types';

describe('PROJECT_DATA', () => {
    it('has at least one project', () => {
        expect(Object.keys(PROJECT_DATA).length).toBeGreaterThan(0);
    });

    it('every project has required fields', () => {
        Object.values(PROJECT_DATA).forEach((project: Project) => {
            expect(project.id).toBeDefined();
            expect(project.title).toBeTruthy();
            expect(project.category).toBeTruthy();
            expect(project.client).toBeTruthy();
            expect(project.date).toBeTruthy();
            expect(project.heroImg).toBeTruthy();
            expect(project.description).toBeTruthy();
            expect(project.gallery.length).toBeGreaterThan(0);
            expect(project.services.length).toBeGreaterThan(0);
            expect(project.materials).toBeDefined();
            expect(project.materials.paper).toBeTruthy();
            expect(project.materials.size).toBeTruthy();
            expect(project.materials.method).toBeTruthy();
            expect(project.challenges.length).toBeGreaterThan(0);
            expect(project.tags.length).toBeGreaterThan(0);
            expect(project.rating).toBeGreaterThanOrEqual(1);
            expect(project.rating).toBeLessThanOrEqual(5);
        });
    });

    it('project IDs match their keys', () => {
        Object.entries(PROJECT_DATA).forEach(([key, project]) => {
            expect(String(project.id)).toBe(key);
        });
    });

    it('all gallery images are URLs', () => {
        Object.values(PROJECT_DATA).forEach((project) => {
            project.gallery.forEach((img) => {
                expect(img).toMatch(/^https?:\/\//);
            });
        });
    });
});
