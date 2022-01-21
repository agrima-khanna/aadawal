import "../styles/ngoAndEvents.css";
import ngoLogo from "./ngo_logo.jpg";
import genesis from "./ngo/image8.png";
import img1 from "./ngo/image47.jpg";
import img2 from "./ngo/image18.jpg";
import img3 from "./ngo/image10.jpg";
import img7 from "./ngo/image21.jpg";
import img4 from "./ngo/image22.jpg";
import img5 from "./ngo/image33.png";
import img6 from "./ngo/image45.jpg";
import { GoToTop, Slideshow } from ".";
const images = [img1, img2, img3, img4, img5, img6, img7];
function ActivitiesGallery(props) {
  if (props.flag)
    return (
      <div className="activitiesGallery">
        <Slideshow
          images={images}
          properties={{
            indicators: true,
            duration: 2000,
            arrows: false,
          }}
        />
      </div>
    );
  else return <></>;
}

export function Ngo() {
  const sections = [
    {
      id: "about",
      content: `AMI is an initiative to build self-confidence among women, Illiterate, socially deprived,
            child labor, orphan, physically challenged children and other weaker
            sections of society. The operational areas, which include the tribal
            dominated region of Udaipur, Chhitorgarh and Banswara face continued
            backwardness in regards to education, health, Consumer awareness and
            drinking water facilities. In these areas many social evils such as
            child marriage and polygamy are common. AMI believes that
            development can be achieved only by motivating the community to take
            up the responsibility of their own development. Thus, our programs
            mainly focus on community-based approach, facilitating processes of
            confidence building, providing linkages and accessibility to various
            programs, and this gives us a satisfaction of achievement.`,
      name: "AMI Sansthan",
      photo: ngoLogo,
    },
    {
      id: "genesis",
      content: ` AMI is an organization of youth activists of Udaipur (Rajasthan
            -India) formed in order to build a healthy creative and progressive
            view towards life as opposed to the widely spread pessimism,
            consumerism, non-scientific way of living & declining value system.
            AMI is an organization of young social activists formed in 1996.
            Since its inception it has been actively engaged in the social
            development and socio-cultural renaissances of the tribal and non
            –tribal exploited and deprived people of southern Rajasthan through
            literary and various creative performing arts along with committed
            social work. AMI is a group of committed youth who are innovative &
            experimental. Group is working for folk forms, traditional arts and
            rare theatre forms in tribal field of southern Rajasthan. AMI has
            organized research work, training programs, theatre workshops and
            produced various plays along with the work for Health issues like
            HIV/AIDS & RCH, Women Empowerment especially in weaker sections of
            the society, Eco-friendly Environment activity, Consumer Awareness
            program and programs for promotion of Rajasthani language through
            literary event and various workshop/play for De-addition such as
            same. AMI is a voluntary social Organization in the real sense. The
            leadership and the workers are not fully dependent on the
            organization’s finance. AMI is a grass root level organization and
            gets active support from the village people. It has been abstaining
            from the tendency of becoming a bureaucratic mammoth and shaped
            itself into a sleek situation based simple voluntary group. Support
            staff is non-existent as the workers themselves do all sorts of
            jobs. It is because of this special feature of the AMI it resides in
            the mind of everybody in and around Udaipur zone. It has the
            capabilities and determination to usher in expanding socio-cultural
            movement. The fundamental philosophy of AMI is the possibility of a
            total change in the consciousness. Thought and life of the entire
            society including the exploited and disadvantaged people can be
            changed by arousing the social sensibility of every individual. This
            transformation of the individual into a conscientious citizen will
            lead to the formation of a healthy and beautiful nation-society full
            of humanity as opposed to a society ridden by inequality,
            exploitation, sexual discrimination, consumerism, caste based
            oppression and inhumanity. World –wide study & research shows that
            despite many schemes and huge investment socio-economic conditions
            have remained unchanged. Devoid of all the information inputs,
            science & technological developments, equal socio-cultural rights
            and basic human rights we are still bound to live in a primitive
            world even when the whole world is about to see the dawn of the new
            era. To break this and to provide opportunities through linguistic,
            cultural, theatrical & performing arts and mass communication
            mediums to people and especially to our younger generations AMI is
            constituted so that community can establish an affinity with the
            mainstream of total development. AMI will help people to develop
            their own scientific models with the help of which and along with
            modern methods of mass communications, they will be able to
            creatively contribute to the reconstruction of a beautiful society
            and fight against inequality, communalism, racism and
            discrimination. To achieve this vision AMI set a mission of
            developing high socio-cultural values in society, and provide better
            educational and health facilities and sufficient economic resources,
            giving priorities and importance to rehabilitation of weaker section
            covering orphan and physically challenged individuals.`,
      name: "Genesis of AMI",
      photo: genesis,
    },
    {
      id: "strategy",
      content: `  AMI promotes Sustainable Education, Health, Environment Conservation
            and Livelihood initiatives for deprived individuals and community,
            with an approach of motivating the community to take on the roles
            and responsibilities for development of individuals who are not
            capable. The key strategies are: Apply principles of participation
            in identification and prioritization of problems and also deciding
            upon for identification of Development Programs. Empowerment and
            confidence building among physically challenged ones for normal life
            and participate in their main stream development. Collaborate with
            the government, institutions, community organizations and
            individuals with similar understandings and approaches.`,
      name: "Strategy",
    },
    {
      id: "area",
      content: `   AMI Sansthan is operating in tribal dominated region of Udaipur,
            Chittorgarh and Banswara districts of southern Rajasthan mainly on
            the aspects of awareness, linkages and fight for rights. Presently
            it is working in 9 tehsils (Kotra, Girwa, Gogunda, Bhinder, Mavli,
            Ghatol, Kapasan, Dungla, Bhadesar and Chittorgarh ) and is reaching
            98 villages.`,
      name: "Operation Area",
    },
    {
      id: "activities",
      content: `<div> AMI has taken multidimensional approach for overall development of
            the area and its activities can be grouped into following
            categories: 
            <div class="activities">
            

<div><h4>Health awareness and Health Education</h4> - HIV/AIDS &amp; RCH sensitization to society and PRI <br/> - Health checkup and medical treatment camps <br/>  - De-addiction and non-alcoholism workshop/ Seminar</div>

<div><h4>Education and Child Development Programs</h4> - Fundamental Basic Learning with games &amp; Education  Opportunities for needy and deprived children especially orphan and physically challenged <br/> - Facilitating Linkages (TRI) <br/> - Empowering physically &amp; socially Challenged Children (Child Labor)</div>

<div><h4>Community Organization Program  Animal Husbandry camp </h4> - Blood Donation &amp; Check Up<br/>  - Health Camps for villagers <br/> - Voter awareness and education to voting right  <br/>- Consumer Awareness Forum <br/> - Save water &amp; natural resources (Step wells) <br/> - Training on Dance, Drawing and Language <br/> - Technical and entrepreneurship development program for youth<br/>  - Heritage Prevention</div>

<div><h4>Eco-friendly Environment Activity (Science &amp; Technology) </h4> - Amrita Devi plantation program<br/> - Improved Stove <br/> - Vermin Composting <br/> - Technical modified Farming Equipment <br/> - Medicinal Plantation</div>

<div><h4>Women Empowerment Program  SJSRY activity </h4> - Vocational training and SHG <br/> -Micro credit training program <br/> - Income generation and empowerment program</div>

<div><h4>Theater, literary and Cultural Event (IEC) </h4> - Pathak Manch Samvad <br/> - Dialogue for Rajasthani language and Kavi sammelan <br/> - Documentation for Cultural, Historical heritage (Colors of Aarawal) <br/> - Awareness activity for Save water &amp; Solid waste management <br/> - Plays on various issues for awareness</div></div></div> `,
      name: "Activities",
    },
  ];
  return (
    <div className="ngo">
      <div className="sectionNav">
        {sections.map((section, i) => {
          return (
            <a key={i} className="sectionNavBtn" href={`#${section.id}`}>
              {section.name}
            </a>
          );
        })}
      </div>
      <table>
        <tbody>
          <tr>
            <td
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#a91d1d",
                borderColor: "#a91d1d",
                padding: "16px",
              }}
            >
              <ActivitiesGallery flag={true} />
            </td>
          </tr>
          {sections.map((section, index) => {
            return (
              <tr key={index}>
                <td id={section.id}>
                  <div
                    style={{
                      fontWeight: "bolder",
                      fontSize: "x-large",
                      color: "#f05454",
                    }}
                  >
                    {section.name}
                  </div>
                  <br />

                  <div>
                    {section.hasOwnProperty("photo") && (
                      <img
                        style={{
                          float: `${index % 2 ? "left" : "right"}`,
                          margin: "8px",
                        }}
                        className="sectionPhoto"
                        src={section.photo}
                        alt={section.id}
                      ></img>
                    )}
                    <div
                      style={{ textAlign: "left", fontSize: "large" }}
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    ></div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <GoToTop />
    </div>
  );
}
