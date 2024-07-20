import { ProjectsView } from '@/data/data';
import ProjectsList from './ListView/ProjectsList';
import ProjectsGrid from './GridView/ProjectsGrid';

const DesktopProjects = ({ view, isHome }: { view?: ProjectsView; isHome: boolean }) => {
  return view === 'grid' ? <ProjectsGrid /> : <ProjectsList isHome={isHome} />;
};

export default DesktopProjects;
