"use client";
import React from "react";
import styles from "./home.module.scss";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Transform Your Business with Our Solutions</h1>
        <p>Innovative solutions designed for your success</p>
        <div className={styles.heroButtons}>
          <Link href="/services" className={styles.primaryBtn}>
            Learn More
          </Link>
          <Link href="/contact" className={styles.secondaryBtn}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

const ServicesOverview = () => {
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
      ];
      

  return (
    <section className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.serviceCards}>
        {services.map((service, index) => (
        <div key={index} className={styles.card}>
        <div className={styles.serviceHead}>
          <div className={styles.serviceIcon}>
            <Image src={service.image} width={35} height={35} alt={service.title} />
          </div>
          <div className={styles.serviceTitle}>
            <h3>{service.title}</h3>
          </div>
        </div>
      
        <p>{service.description}</p>
        <div className={styles.servieReadmore}>
        <Link href="/ServicePage" className={styles.learnMoreBtn}>
          Learn More
        </Link>
        </div>
       
      </div>
      
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "fashion backend strategic theme areas tonapplications in low-risk high schemas for mission-critical materials paradigms with virtual growth strategies rather creatives granular manufactured products project.",
      position: "CEO, Company X",
    },
    {
      name: "Jane Smith",
      feedback: "fashion backend strategic theme areas tonapplications in low-risk high schemas for mission-critical materials paradigms with virtual growth strategies rather creatives granular manufactured products project.",
      position: "Marketing Head, Company Y",
    },
  ];

  return (
    <section className={styles.testimonials}>
      <h2>What Our Clients Say</h2>
      <div className={styles.testimonialCards}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <p>{testimonial.feedback}</p>
            <h4>{testimonial.name}</h4>
            <span>{testimonial.position}</span>
          </div>
        ))}
      </div>
    </section>
  );
};



const Home = () => {
  return (
    <div className={styles.home}>
      <HeroSection />
      <ServicesOverview />
      <Testimonials />
      {/* <CallToAction /> */}
    </div>
  );
};

export default Home;
