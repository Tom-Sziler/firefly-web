import React from 'react';

const therapyServices = [
    "Depression", 
    "Life Transitional Difficulties", 
    "Premarital Counseling", 
    "Anxiety and Stress", 
    "Trauma", 
    "PTSD",
    "Sexual Intimacy",
    "LGBTQ",
    "Relationship Issues",
    "Attention Problems",
    "School Issues",
    "Phobias and Fears",
    "Family, Couples, and Marriage Counseling",
    "Women's Issues",
    "Emotional Regulation",
    "Obsessive Behaviors",
    "Workplace Issues",
    "Sleep Problems"
 ];

 const modalities = [
    "Cognitive Behavioral Therapy",
    "Solution Focused Therapy",
    "Acceptance Commitment Therapy",
    "Christian and Faith-based Therapy",
    "Family Systems Theory",
    "Sensate Focus Therapy",
    "Gestalt Therapy",
    "Play Therapy",
    "Expressive Arts Therapy",
    "Gottman Method"
 ]

const Services = () => (

    
    <div className="services section gray">
    <h1 className="svc-title"> Services <span className="miniText">(available in both English and Spanish)</span></h1>
    <hr />
    <div className="servicesList">
        <ul className="servicesUl">
            {therapyServices.map(service => {
               return <div className="left listItems">-{service}</div>
            })}
        </ul>
    </div>
    <h1 className="svc-title"> Treatment Modalities</h1>
    <hr />
    <div className="servicesList">
        <ul className="modalitiesUl">
            {modalities.map(modality => {
               return <div className="left listItems">-{modality}</div>
            })}
        </ul>
    </div>


        <div className="topSection">
            <div className="box">
                <img className="svc-img" src="../img/happy.jpg" />
            </div>
            <div className="box left">
                <h2>Now Accepting the Following Insurances: </h2>
                <h3> Cigna, Blue Cross Blue Shield PPO,<br/> United Healthcare, and UFCW 1546! </h3>
                <p className="insuranceLink"><a href="http://www.fireflycounseling.net/insurance-page.html">Click Here to See More Insurance Information</a></p>
                <div className="button"> schedule a free consulation </div> 
                
            
            </div>
            
        </div>
        
    </div>
);


export default Services