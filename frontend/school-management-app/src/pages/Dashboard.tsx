import DashboardCard from "@/components/DashboardCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserGraduate, 
  faChalkboardTeacher, 
  faUserTie,
  faBook
} from '@fortawesome/free-solid-svg-icons';
function Dashboard() {
  return (
    <div>
      <div className="flex col-span-4 gap-4">
        <DashboardCard
          title="Etudiants"
          icon={<FontAwesomeIcon icon={faUserGraduate} className="h-5 w-5 dark:text-white"  />}
          value="12.34"
        />
        <DashboardCard
          title="Classes"
          icon={<FontAwesomeIcon icon={faChalkboardTeacher} className="h-5 w-5 dark:text-white" />}
          value="12.34"
        />
        <DashboardCard
          title="Professeurs"
          icon={<FontAwesomeIcon icon={faUserTie} className="h-5 w-5 dark:text-white" />}
          value="12.34"
        />
        <DashboardCard
          title="Matières"
          icon={<FontAwesomeIcon icon={faBook} className="h-5 w-5 dark:text-white" />}
          value="12.34"
        />
      </div>
    </div>
  );
}

export default Dashboard;
