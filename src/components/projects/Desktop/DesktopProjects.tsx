import { ProjectsView } from '@/data/data';
import ProjectsList from './ListView/ProjectsList';
import ProjectsGrid from './GridView/ProjectsGrid';

const DesktopProjects = ({ view }: { view: ProjectsView }) => {
  return view === 'grid' ? <ProjectsGrid /> : <ProjectsList />;
};

export default DesktopProjects;
