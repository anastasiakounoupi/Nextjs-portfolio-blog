import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'projects');

export const getProjectsFiles = () => {
    return fs.readdirSync(projectsDirectory);
}

export const getProjectData = (projectIdentifier) => {
    const projectSlug = projectIdentifier.replace(/\.md$/, '');
    const filePath = path.join(projectsDirectory, `${projectSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);


    const projectData = {
        slug: projectSlug,
        ...data,
        content,
    };

    return projectData;
}

export const getAllProjects = () => {
    const projectFiles = getProjectsFiles();

    const allProjects = projectFiles.map(projectFile => {
        return getProjectData(projectFile);
    });

    return allProjects;
}

export function getFeaturedProjects() {
    const allProjects = getAllProjects();

    const featuredProjects = allProjects.filter(project => project.isFeatured)

    return featuredProjects;
}