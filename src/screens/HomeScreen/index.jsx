import React, { useState } from "react";
import AuthModal from "../../components/AuthModal";
import Footer from "../../components/Footer";
import InfoGroup from "../../components/InfoGroup";
import Navbar from "../../components/Navbar";
import SearchModal from "../../components/SearchModal";
import homeStyle from "./HomeScreen.module.css";
import Button from "../../components/Button";

const HomeScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      {showModal ? <AuthModal setShowModal={setShowModal} /> : null}
      {showSearch ? <SearchModal setShowSearch={setShowSearch} /> : null}
      <div className={homeStyle.landingPage}>
        <div className={homeStyle.containerFluid} style={{ height: "60vh" }}>
          <Navbar setShowModal={setShowModal} />
          <div className={homeStyle.centralInput}>
            <h1 className={homeStyle.header}>Find the best colleges, exams and courses in India</h1>
            <div className={homeStyle.inputBar}>
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search Exams, Colleges, Courses and more"
                onClick={() => setShowSearch(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", background: "#fff" }}>
        <div className={`${homeStyle.showcase} ${homeStyle.containerFluid}`}>
          <p className={homeStyle.showcaseHeader}>
            Having problems <br /> Deciding what to do?
          </p>
          <div className={homeStyle.showcaseContent}>
            <h3>Get Expert Counselling</h3>
            <p>
            We ease your biggest doubts with personalized counselling from our curated experts.
            </p>
            <Button title='Get Counselling' />
          </div>
        </div>
      </div>
      <div className={homeStyle.containerFluid}>
        <InfoGroup header="Top Featured Exams" search="Search Exams" />
        <InfoGroup header="Top Featured Colleges" search="Search Colleges" />
        <InfoGroup header="Top Featured Courses" search="Search Courses" />
      </div>
      <Footer />
    </>
  );
};

export default HomeScreen;
