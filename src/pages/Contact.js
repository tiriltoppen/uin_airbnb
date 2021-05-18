/* eslint-disable */
import { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactRedaksjonen from '../components/ContactRedaksjonen';
import Title from '../components/Title';
import { Container } from '../styles/Styles';
import { createContact, getaapen, getContact, getContactByOpen } from '../utils/contactService';
import Footer from '../components/Footer';


const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);


const [data, setData] = useState(null);
useEffect(() => 
{const fetchDataAsync = async () => {
  const tideraapen = await getContactByOpen('aapenlordag');
  console.log(tideraapen);
  

setData(tideraapen);
}; 
fetchDataAsync();
}, []);
// AAPEN HER
const [aapen, setAapen] = useState(null);
useEffect(() => 
{const fetchDataAsync = async () => {
  const tideraapen = await getaapen('aapenlordag');
 setAapen(getContactByOpen);
  

setData(aapen);
}; 
fetchDataAsync();
}, []);

//SEND KNAPPEN SIN STATE
  const onSubmit = async (data) => {
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      await createContact(data);
      setSuccess(true);
    } catch (error) {
      setError(error.message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <ContactRedaksjonen />
     
      <Title title={data?.title} />
     
      {error ? <p>{error}</p> : null}
      {success ? (
        <p>Takk for at du kontakter oss. Henvendelsen din er mottatt</p>
      ) : null}
      <ContactForm loading={loading} onSubmit={onSubmit} />
      <Footer />
    </Container>
  );
};

export default Contact;

