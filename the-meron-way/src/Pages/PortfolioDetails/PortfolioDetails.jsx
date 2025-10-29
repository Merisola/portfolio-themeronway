import React from "react";
import { useParams } from "react-router-dom";
import ProjectDetail from "../../components/Portfolio/ProjectDetail";

const ProjectDetailPage = () => {
  const { id } = useParams();

  return (
    <main>
      <ProjectDetail projectId={id} />
    </main>
  );
};

export default ProjectDetailPage;
