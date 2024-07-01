"use client";

import { useState } from 'react';
import Modal from './components/modal';
import { useTranslations } from 'next-intl';

export default function Machines() {
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations('machines');

  const openModal = (machine: any) => {
    setSelectedMachine(machine);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMachine(null);
  };

  const machinesData = t.raw('machinesData');

  return (
    <main className="min-h-screen relative mb-20">
      <div className="relative z-0 p-16 bg-gray-100 w-full">
        <div className="flex justify-center mb-8">
          <img
            src='/logo_white.png'
            alt="Minex Drill"
            width="194"
            height="149"
          />
        </div>
        <h2 className="text-3xl font-bold text-center mb-8">{t('title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {machinesData.map((machine:any, index:any) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-4">{machine.name}</h3>
              <img src={machine.imageUrl} alt={machine.name} className="mb-4 w-full h-48 object-cover" />
              <table className="w-full mb-4">
                <thead>
                  <tr>
                    <th className="border px-2 py-1">{t('rodDiameter')}</th>
                    <th className="border px-2 py-1">{t('depth')}</th>
                    <th className="border px-2 py-1">{t('depthFt')}</th>
                  </tr>
                </thead>
                <tbody>
                  {machine.capacities.rods.map((rod: any, rodIndex: number) => (
                    <tr key={rodIndex}>
                      <td className="border px-2 py-1">{rod.diameter}</td>
                      <td className="border px-2 py-1">{rod.depth}</td>
                      <td className="border px-2 py-1">{rod.depth_ft}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={() => openModal(machine)}
                className="text-red-500 font-semibold"
              >
                {t('details')}
              </button>
            </div>
          ))}
        </div>
      </div>
      {selectedMachine && (
        <Modal isOpen={isModalOpen} onClose={closeModal} machine={selectedMachine} />
      )}
    </main>
  );
}
