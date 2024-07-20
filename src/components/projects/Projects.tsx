import MobileProjects from './Mobile/MobileProjects';
import DesktopProjects from './Desktop/DesktopProjects';
import { ProjectsView } from '@/data/data';

const Projects = ({ view, isHome }: { view?: ProjectsView; isHome: boolean }) => {
  return (
    <div
      style={
        view === 'list'
          ? { borderTop: '1px solid #fff' }
          : { borderBottom: 'none' }
      }
    >
      <>
        <DesktopProjects view={view!} isHome={isHome} />
        <MobileProjects isHome={isHome} />
      </>
    </div>
  );
};

export default Projects;
