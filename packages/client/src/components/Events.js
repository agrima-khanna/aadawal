import "../styles/ngoAndEvents.css";
import React from "react";
import { GoToTop } from ".";
export function Events() {
  const sections = [
    {
      id: "intro",
      content: `Four day Jhalsoo inaugurated at Padma Shri Sitaram Lalas Hall on 5th July in the dignified presence of revered Shri Bhanu Bharti, Sh. Shreepal Singh Shekhawat and Prof. Rima Hooja, Dr. Dev Kothari, Dr. Aaidan Singh Bhati along with the packed house audience of art and culture lovers of the city.

`,
    },
    {
      id: "hemani",
      content: `Talk show organized on the Pre-historic importance of Rajasthan. Speakers namely Prof. Rima Hooja, Dr. Jeevan Kharkwal, moderator Shri Rajendra Sen participated with their expert knowledge. 
Session on awareness of the tribal culture of our state. Shri Digendra Kumar, a recipient of Mahaveer Chakra (for his bravery in Kargil war), Dr. Suresh Salvi, HOD of the Rajasthani Department, MLSU and moderator, Dr. Indra Prakash Shrimali former Director All India Radio memorized the brave military contributions of Rajasthan in the freedom movement and shared their experiences.

`,
      name: "Hemani",
    },
    {
      id: "culturalShow",
      content: ` Sweet melodious vocal presentation of Rajasthani Music by Sh. Wasim Jaipuri and Sh. Dinesh Verma captivated the audience till Midnight at Padma Shree Rani Laxmi Kumari Chundawat Auditorium. The whole Auditorium throbbed with the Magma melody of sensational Rajasthani folk music, dance and Talwar Geir.

`,
      name: "Cultural Show",
    },
    {
      id: "dholaMaru",
      content: `Rajasthani film show “Gauru” (Internationally awarded) directed and written by Sh. Ram Krishna Choyal acted by Ila Arun. Round of talk shows on the technical aspect of Rajasthani Films, the formation of Film City in Rajasthan and the need of providing exposure to the emerging artists of Rajasthan Film Industry. Participants for the discussion were Sh. Ravi Jankhal, Sh. Nishant Bharadwaj, Sh. Ram Choyal & Sh. Kshitiz Kumar. 

`,
      name: "Dhola-Maru",
    },
    {
      id: "jhajam",
      content: `On eve of 6th July, god bestows his blessings in the form of rain when Dingal Chand Barsaloo was sung by the artists. It is a Hindustani classical raga. The name derived from Sanskrit word “Megh" meaning “clouds”. Legends say that this raga has the power to bring out rains in the area where it is sung. Audience of all age groups and from all communities of Udaipur witnessed the complete divinity at Bavji Chatur Singh Auditorium.

`,
      name: "Jhajham",
    },
    {
      id: "hathai",
      content: `Session on benefits, contributions, richness and upliftment of regional languages. Dr. Dev Kothari former Chairman RBSS Academy Bikaner, Dr. Mahendra Singh Lalas and Shri
Arvind Singh Ashiya, Dr. P.K. Dashora, Dr. Suraj Rao & Kiran Rajpurohit presented their views as panelists at PadmaShree Vijaydan Detha Hall.
`,
      name: "Hathai",
    },
    {
      id: "hunkaroAndNagaro",
      content: `City witnessed a great discussion over the topic Rajasthani folk tale tradition, dramatics and demonstrative art. It was hosted by Sri Deepak Joshi, senior stage artist, Shri Narayan Singh Pithal, former Deputy chairperson R.B.S.S. Academy Bikaner moderator Shri Sanjay Vyas & Mangi Lal Mistry, art demonstrator.
Followed by discussion on significant treasure of old manuscripts and their worth in present times for readers and researchers. Speaker Dr. Nitin Goyal, Secretary, RBSS Academy panelist Dr. Mahendra Khadgawat with moderation of Dr. Pryiadarshini Ojha emphasized the vitality of old papers and dearth of experts who are able to read the old manuscript and records written in Juni Rajasthani.

`,
      name: "Hunkaro & Nagaro",
    },
    {
      id: "aadawalarKhyat",
      content: `Padma Shri Kanhaiya Lal Sethia Hall - discussion over most coveted Dingal and Pingal literature and modern poetry in Rajasthani literature. It was given glory with the eminent presence of renowned poet and literarian Dr Aidan Singh Bhati, Prof.Bhanwar Singh Samor. The delegates unanimously agreed to the extent at which Rajasthani language has a significant role in contemporary Indian poetry and literature.`,
      name: "Aadawalar Khyat",
    },
    {
      id: "ghoomar",
      content: `Achieved its ultimate altitude with the performance of renowned folk dancer Vijayalakshmi Ameta, renowned folk singer Sikandar Khan Langa at Padma Shree Devilal Samar Auditorium.`,
      name: "Ghoomar",
    },
    {
      id: "choupal",
      content: ` Maharana Kumbha Auditorium. The final day of the festival began with a talk show at Sahitya Academy campus about the forts and bawaris (water reservoir) of Rajasthan. Sh. Bipin Chandra, Sh. Vishnu Mali and Dr. Kunjan Acharya participated in the discussion. Followed by discussion about the contribution of Rajasthan as games, art and science and it was marked by the presence of guests- gold medalist, Mala Sukhwal- international powerlifting gold medal winner and Ranveer Singh Ranawat.`,
      name: "Choupal",
    },
    {
      id: "closingCeremony",
      content: ` Ceremony composed of discussion over the NRI and contribution of Rajasthan in Economical Development of India, Mr. Om Thanvi VCHJUniv., Shri adhu Acharya, graced the event with their presence.Dr. S.S. Jolawas, Dr.Anushree Rathore and Shri Shivraj Sonwal were the organizing spearheads of this festival along with renowned writer Atul Kanalc, Kota. Sh. Mahesh Ameta, Sh. Kapil Paliwal Master Dikshant Raj as creative head, Sh. kamlesh Sharma & Dr. T.P. Ameta, management & hospitality head. 

 `,
      name: "Closing Ceremony",
    },
  ];
  return (
    <div className="events">
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
          {sections.map((section, i) => {
            return (
              <tr key={i}>
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
