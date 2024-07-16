import MobileProjects from './Mobile/MobileProjects';
import DesktopProjects from './Desktop/DesktopProjects';
import { ProjectsView } from '@/data/data';

const Projects = ({ view }: { view?: ProjectsView }) => {
  return (
    <div
      style={
        view === 'list'
          ? { borderTop: '1px solid #fff' }
          : { borderBottom: 'none' }
      }
    >
      <>
        <DesktopProjects view={view!} />
        <MobileProjects />
      </>
    </div>
  );
};

export default Projects;
