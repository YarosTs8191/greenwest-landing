import { useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Projects.module.css";

import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { projects } from "../../data/projects";

function Projects() {
  const [index, setIndex] = useState(-1);
  const { t } = useTranslation();
  const localizedProjects = projects.map((project) => ({
    ...project,
    alt: t(project.altKey),
  }));

  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <div className={styles.content}>
          <p className={styles.label}>{t("projects.label")}</p>

          <h2 className={styles.title}>{t("projects.title")}</h2>

          <p className={styles.text}>{t("projects.text")}</p>
        </div>

        <div className={styles.gallery}>
          <ColumnsPhotoAlbum
            photos={localizedProjects}
            columns={3}
            onClick={({ index }) => setIndex(index)}
          />
        </div>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={localizedProjects}
        />
      </div>
    </section>
  );
}

export default Projects;
