import { useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { TbFaceIdError } from 'react-icons/tb';

const SubmitLoader = ({ massage = 'Loading...', isLoading = false, isSuccess = false, error = false, onClose }) => {
  return (
    <div className="loader">
      <div className="ing">
        {isSuccess && <FaRegCheckCircle />} {error && <TbFaceIdError />} {massage}
      </div>
      {isLoading && <div className="loading"></div>}
      {!isLoading && <div className="btn-danger" onClick={onClose}>Close</div>}
    </div>
  );
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const hideLoader = () => {
    setStatusMessage(null);
    setIsSubmitting(false);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setContact('');
    setSubject('');
    setDescription('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(
      <SubmitLoader 
        massage="Submitting..." 
        isLoading={true}
        onClose={hideLoader}
      />
    );

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          contact,
          subject,
          description,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage(
          <SubmitLoader 
            massage="Form submitted successfully!" 
            isSuccess={true}
            onClose={() => {
              hideLoader();
              resetForm();
            }}
          />
        );
      } else {
        setStatusMessage(
          <SubmitLoader 
            massage="Failed to submit form. Please try again." 
            error={true}
            onClose={hideLoader}
          />
        );
      }
    } catch (error) {
      console.error('Error:', error);
      setStatusMessage(
        <SubmitLoader 
          massage="An error occurred. Please try again." 
          error={true}
          onClose={hideLoader}
        />
      );
    }
  };

  return (
    <div className="form-wrapper">
      <h1 className="title">Contact Us</h1>
      <p className="subtitle">Got questions or comments? Use the form below to get in touch.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <fieldset disabled={isSubmitting} className="   ">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                id="name" 
                value={name}
                placeholder="Your name" 
                className="form-input" 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
            <div className="form-column">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                id="email"
                value={email} 
                placeholder="Your email" 
                className="form-input" 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="contact" className="form-label">Contact</label>
              <input 
                type="tel" 
                id="contact"
                value={contact} 
                placeholder="Your phone number" 
                className="form-input" 
                onChange={(e) => setContact(e.target.value)} 
                required 
              />
            </div>
            <div className="form-column">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input 
                type="text" 
                id="subject"
                value={subject} 
                placeholder="Subject" 
                className="form-input" 
                onChange={(e) => setSubject(e.target.value)} 
                required 
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="issue" className="form-label">Describe your issue</label>
              <textarea 
                id="issue" 
                value={description}
                placeholder="Describe your issue" 
                rows="4" 
                className="materialize-textarea" 
                onChange={(e) => setDescription(e.target.value)} 
                required
              ></textarea>
            </div>
          </div>
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </fieldset>
      </form>
      {statusMessage}
    </div>
  );
};

export default ContactForm;