import Image from "next/image";
import styles from "./service.module.scss";
import Link from "next/link";

const ServicePage = () => {
  const services = [
    {
      title: "Couple Therapy",
      description:
        "Professional mission capital without enterprise medical users pros value-added e-enabled creative technology via team.",
      image: "/image/srvce-icn-1.png",
    },
    {
      title: "Family Counseling",
      description:
        "Professional mission capital without enterprise medical users pros value-added e-enabled creative technology via team.",
      image: "/image/srvce-icn-3.png",
    },
    {
      title: "Parenting Skills",
      description:
        "Professional mission capital without enterprise medical users pros value-added e-enabled creative technology via team.",
      image: "/image/srvce-icn-6.png",
    },
    {
      title: "Anxiety Disorder",
      description:
        "Professional mission capital without enterprise medical users pros value-added e-enabled creative technology via team.",
      image: "/image/srvce-icn-4.png",
    },
    {
      title: "Group Therapy",
      description:
        "Professional mission capital without enterprise medical users pros value-added e-enabled creative technology via team.",
      image: "/image/srvce-icn5.png",
    },
    {
      title: "Personal Meeting",
      description:
        "Professional mission capital without enterprise medical users pros value-added e-enabled creative technology via team.",
      image: "/image/srvce-icn-2.png",
    },
  ];
  return (
    <div className={styles.service}>
      <div className={styles.heroSection}>
        <div className={styles.heroSectionContent}>
          <h1>Our Service</h1>
          <p>
            <Link href="/">HOME</Link> / SERVICE
          </p>
        </div>
      </div>
      <div className={styles.serviceContainer}>
        <div className={styles.serviceContent}>
          <div className={styles.serviceCards}>
            {services.map((service, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.serviceHead}>
                  <div className={styles.serviceIcon}>
                    <Image
                      src={service.image}
                      width={35}
                      height={35}
                      alt={service.title}
                    />
                  </div>
                  <div className={styles.serviceTitle}>
                    <h3>{service.title}</h3>
                  </div>
                </div>

                <p>{service.description}</p>
                <div className={styles.servieReadmore}>
                  <Link href="/services" className={styles.learnMoreBtn}>
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
