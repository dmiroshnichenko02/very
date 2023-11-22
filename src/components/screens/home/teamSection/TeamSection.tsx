import { FC, PropsWithChildren } from "react";

import Image from "next/image";

import styles from "./teamSection.module.scss";
import { TeamMember } from "@/interfaces/home.interface";
import Slider from "react-slick";

interface ITeamSection {
  team: TeamMember[];
  title: string;
  teamBtn: string;
}

const TeamSection: FC<PropsWithChildren<ITeamSection>> = ({
  team,
  title,
  teamBtn,
}) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={styles.team} id="team">
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.wrapper}>
        {team && (
          team.map((item, index) => {
            return (
              <div key={index} className={styles.teamBlockWrap}>
                <div className={styles.teamBlock}>
                  <div className={styles.img}>
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={"400"}
                      height={"390"}
                    />
                  </div>
                  <div className={styles.info}>
                    <h3 className={styles.name}>{item.name}</h3>
                    <div className={styles.position}>{item.position}</div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          {team && (
            team.map((item, index) => {
              return (
                <div key={index} className={styles.teamBlockWrap}>
                  <div className={styles.teamBlock}>
                    <div className={styles.img}>
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={"400"}
                        height={"390"}
                        priority
                      />
                    </div>
                    <div className={styles.info}>
                      <h3 className={styles.name}>{item.name}</h3>
                      <div className={styles.position}>{item.position}</div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </Slider>
      </div>
      <div className={styles.btns}>
        <div className={styles.btn}>
          <div className={styles.btnText}>{teamBtn}</div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
