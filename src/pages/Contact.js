import { addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { messagesCollection } from "../firebase/Firebase";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !email || !subject || !message) {
      alert("Please fill out all fields");
      return;
    }

    setLoading(true);
    await addDoc(messagesCollection, {
      name,
      email,
      subject,
      message,
      createdAt: serverTimestamp(),
    });
    setLoading(false);

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    alert("Message has been sent");
  };

  return (
    <div id="root">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header></Header>
        <div style={{ display: "flex", flexDirection: "columnn", gap: "30px" }}>
          <div
            style={{
              width: 624,
              margin: "0 auto",
              paddingTop: 50,
              paddingBottom: 50,
            }}
          >
            <h1 style={{ color: "black", fontSize: 36, fontWeight: 600 }}>
              Contact Us
            </h1>
            <p style={{ color: "#696a75", fontSize: 16, fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: 40,
              }}
            >
              <div
                style={{
                  border: "1px solid #e8e8ea",
                  borderRadius: 12,
                  gap: 10,
                  padding: 16,
                  width: 260,
                }}
              >
                <h2>Address</h2>
                <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
              </div>
              <div
                style={{
                  border: "1px solid #e8e8ea",
                  borderRadius: 12,
                  gap: 10,
                  padding: 16,
                  width: 260,
                }}
              >
                <h2>Contact</h2>
                <p>
                  313-332-8662
                  <br />
                  info@gmail.com
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#f6f6f7",
                borderRadius: 10,
                gap: 20,
                padding: 40,
                width: 526,
                display: "flex",
                flexDirection: "column",
                border: "medium",
              }}
            >
              <h2 style={{ margin: 0 }}>Leave a message</h2>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <input
                  placeholder="Your name"
                  style={{
                    width: 230,
                    padding: 10,
                    fontSize: 13,
                    borderRadius: 10,
                    border: "1px solid gray",
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  placeholder="Your email"
                  style={{
                    width: 230,
                    padding: 10,
                    fontSize: 13,
                    border: "1px solid gray",
                    borderRadius: 13,
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                placeholder="Subject"
                style={{
                  padding: 8,
                  border: "1px solid gray",
                  borderRadius: 10,
                }}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                placeholder="Write a message"
                rows={6}
                style={{ borderRadius: 10, padding: 16 }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <Button onClick={handleSubmit} disabled={loading}>
                {loading ? "Loading" : "Send Message"}
              </Button>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};
