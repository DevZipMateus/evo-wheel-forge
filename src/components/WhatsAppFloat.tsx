const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511947783837', '_blank');
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 cursor-pointer hover:scale-110 transition-transform duration-300"
      onClick={handleWhatsAppClick}
    >
      <img 
        src="/lovable-uploads/dd38c678-40ff-4941-a217-922583dc0013.png" 
        alt="WhatsApp" 
        className="w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
      />
    </div>
  );
};

export default WhatsAppFloat;