import { Mail, MapPin, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-7xl mb-12 text-center">Get in touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                Contact Details
              </h3>
              <div className="flex items-center space-x-3 text-zinc-300">
                <Mail size={20} />
                <a
                  href="mailto:your.email@example.com"
                  className="hover:text-white transition-colors"
                >
                  shahriyers@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-3 text-zinc-300">
                <MapPin size={20} />
                <span>Munich, Germany</span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                Social Links
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/fahim-shahriyer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/fahimshahriyer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-80 md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170129.53089348634!2d11.360972449335923!3d48.15513758294169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9a38c5fd9%3A0x10cb84a7db1987d!2sMunich%2C%20Germany!5e0!3m2!1sen!2sus!4v1643825036460!5m2!1sen!2sus&map_id=8f348c3d2f9f5a6f"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) grayscale(1)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
