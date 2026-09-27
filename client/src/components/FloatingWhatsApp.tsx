import { FaWhatsapp } from "react-icons/fa6";

export default function FloatingWhatsApp() {
  const whatsappNumber = "919769339987";
  const defaultMessage = encodeURIComponent(
    "Hello NATIONAL STEEL & ALLOYS, I am interested in inquiring about your steel and alloy products."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with NATIONAL STEEL & ALLOYS on WhatsApp"
        className="flex items-center justify-center w-11 h-11 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95"
        data-testid="floating-whatsapp-btn"
      >
        <FaWhatsapp className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
}
