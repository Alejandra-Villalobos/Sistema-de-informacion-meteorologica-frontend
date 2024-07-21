import React, { useEffect, useState } from "react";
import { getAllImagesByInstrumentId } from "../../api/imagen";
import { Divider, Modal } from "antd";

function ToolCard({ tool }) {
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleGetImages = async () => {
    try {
      const response = await getAllImagesByInstrumentId({
        id: tool.id_instrumento,
      });
      setImages(response);
    } catch (error) {}
  };

  useEffect(() => {
    handleGetImages();
    // eslint-disable-next-line
  }, [tool]);

  return (
    <>
      <div
        className="flex flex-col items-center border-white bg-main-blue border-2 rounded-xl shadow-instruments w-64 hover:scale-105 transition-transform cursor-pointer p-4"
        onClick={showModal}
      >
        <p className="text-center text-white font-bold pb-4">{tool.nombre}</p>
        <img src={images[0]?.url} alt={tool.nombre} className="h-36" />
      </div>
      <Modal open={isModalOpen} onCancel={handleCancel} footer={null} width={"60%"}>
        <p className="text-center text-main-blue font-bold text-2xl py-4">
          {tool.nombre}
        </p>
        <div className="flex justify-center gap-2">
            
          <img
            key={images[0]?.id_imagen_instrumento}
            src={images[0]?.url}
            alt={tool.nombre}
            className="h-96 max-w-96"
          />

          <Divider type="vertical" className="h-96 bg-gray-400" />
          <p className="text-lg text-justify">{tool.descripcion}</p>
        </div>
      </Modal>
    </>
  );
}

export default ToolCard;
