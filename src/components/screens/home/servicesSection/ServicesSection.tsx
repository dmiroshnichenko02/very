import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./servicesSection.module.scss";

interface IServicesSection {
  headlessTitle: string;
  title: string;
  subTitle: string;
  reactImage: string;
  reactImageSecond: string;
  reactImageThird: string;
  btnLink: string;
  btnText: string;
}
const ServicesSection: FC<PropsWithChildren<IServicesSection>> = ({
  headlessTitle,
  title,
  subTitle,
  reactImage,
  reactImageSecond,
  reactImageThird,
  btnText,
  btnLink,
}) => {
  const boldRegex = /<strong>(.*?)<\/strong>/g;

  const strongTitle = subTitle.split(boldRegex).map((part, index) => {
    if (part.match(boldRegex)) {
      return <span key={index}>{part.replace(/<\/?strong>/g, "")}</span>;
    }
    return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />;
  });

  return (
    <>
      <section className={styles.services} id="services">
        <h2 className={styles.title}>{headlessTitle}</h2>
        <h2 className={styles.secondTitle}>{title}</h2>
        <p className={styles.subTitle}>{strongTitle}</p>
        <div className={styles.img}>
          <Image
            src={reactImage}
            alt={headlessTitle}
            width={"400"}
            height={"250"}
            priority
          />
          <Image
            src={reactImageSecond}
            alt={headlessTitle}
            width={70}
            height={63}
            priority
          />
          <Image
            src={reactImageThird}
            alt={headlessTitle}
            width={"370"}
            height={"370"}
            priority
          />
        </div>
        <div className={styles.btns}>
          <div className={styles.btn}>
            <Link href={btnLink}>{btnText}</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
