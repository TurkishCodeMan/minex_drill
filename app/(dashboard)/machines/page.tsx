"use client";

import { useState } from 'react';
import Modal from './components/modal';

const machineData = [
  {
    name: "MD-2500",
    imageUrl: "/md2500.jpeg",
    capacities: {
      rods: [
        { type: "PWL", diameter: "114,3 mm", depth: "1,000 m", depth_ft: "3,280 ft" },
        { type: "HWL", diameter: "88,9 mm", depth: "1,900 m", depth_ft: "6,232 ft" },
        { type: "NWL", diameter: "69,9 mm", depth: "2,500 m", depth_ft: "8,200 ft" },
        { type: "BWL", diameter: "54 mm", depth: "3,000 m", depth_ft: "9,840 ft" },
      ],
    },
    details: {
      motor: {
        motor: "Cummins, Ford, Iveco, Volvo",
        motor_capacity: "8.9 Lt",
        max_power: "400Hp @2100 rpm",
        fuel_tank_capacity: "400 Lt",
        emission_certificate: "Tier3-4 Sertifikalı",
        motor_torque: "1700 Nm @ 1300 rpm",
        control_unit: "Elektronik Kontrol ( ECM )",
      },
      hydraulic_system: {
        main_hydraulic_pump: {
          type: "Değişken debili eksenel pistonlu - Yük Duyarlı (Load Sensing)",
          flow_rate: "160cc",
          pressure: "350 bar",
        },
        secondary_hydraulic_pump: {
          type: "PİSTONLU",
          flow_rate: "45 cc",
          pressure: "350 bar",
        },
        third_hydraulic_pump: {
          type: "PİSTONLU",
          flow_rate: "28 cc",
          pressure: "280 bar",
        },
        fourth_pump: {
          type: "DİŞLİ",
          flow_rate: "19 cc",
          pressure: "200 bar",
        },
        fifth_pump: {
          type: "DİŞLİ",
          flow_rate: "8 cc",
          pressure: "200 bar",
        },
        wireline_hydromotor: "400 cc",
        mud_pump_hydromotor: "160 cc",
        main_winch_hydromotor: "80 cc",
        hydraulic_control_panels: "PANEL İÇİN HİDROLİK ELEMANLAR",
        hydraulic_tank_capacity: "400 LT",
        cooler: "ÇİFT SİSTEM SOĞUTMA",
        filters: "TANK DÖNÜŞ, EMİŞ, BASINÇ, MORSET",
      },
      morse_module: {
        rotation_motor: "160 cc",
        morse_inner_diameter: "119mm",
        jaw: "7 adet",
        jaw_holding_force: "184.700 N",
        jaw_type: "HİDROLİK SIKMA YAYLI AÇMA",
      },
      mechanical_transmission: {
        main_gear_ratio: "2:1",
        gearbox_ratios: [
          { gear: "1. VİTES", ratio: "6,27:1", speed: "160rpm - 260rpm", torque: "9.784 Nm - 6.002 Nm" },
          { gear: "2. VİTES", ratio: "3,12:1", speed: "320rpm - 522rpm", torque: "4.868 Nm - 2.986 Nm" },
          { gear: "3. VİTES", ratio: "1,75:1", speed: "571rpm - 930rpm", torque: "2.730 Nm - 1.675 Nm" },
          { gear: "4. VİTES", ratio: "1,00:1", speed: "1.000rpm - 1.630rpm", torque: "1.560Nm - 957Nm" },
        ],
      },
      tower: {
        drilling_angle: "45° Yatay Açı - 90° Dik Açı Arası",
        feed_length: "335cm",
        pulling_force: "18.000kg",
        pushing_force: "24.000 kg",
        tower_features: [
          "Teleskopik Olarak Açılan Kule",
          "6 mt Çekme Kapasitesil",
          "Bağımsız 2 Adet Hidrolik Kule Açma Pistonu",
          "Hidrolik Yana Kayabilen Morset",
          "Kuleye Monte Ana Vinç",
          "Acil Durum Güvenlik Halatı",
        ],
      },
      winch_and_rope_system: {
        main_winch: [
          "Sabit Hızlı Hidrolik Tahrikli Tambur Motoru",
          "18.000 Kg. Çekme Kapasitesi",
          "15m/dk Çekme Hızı",
          "18mm Çapında Çelik Halat",
        ],
        wireline_winch: [
          "37 kN Boş Tambur Kuvveti",
          "8,9 kN Dolu Tambur Kuvveti",
          "130m/d Boş Tambur Hızı",
          "550m/d Dolu Tambur Hızı",
          "6 mm Çapında, 1.600m Çelik Halat",
        ],
      },
      track: "TRACKONE SRL 12TON",
    },
  },
  {
    name: "MD-1000",
    
    imageUrl: "/md2500.jpeg",
    capacities: {
      rods: [
        { type: "PWL", diameter: "114,3 mm", depth: "900 m", depth_ft: "2,952 ft" },
        { type: "HWL", diameter: "88,9 mm", depth: "1,500 m", depth_ft: "4,920 ft" },
        { type: "NWL", diameter: "69,9 mm", depth: "2,000 m", depth_ft: "6,560 ft" },
        { type: "BWL", diameter: "54 mm", depth: "2,500 m", depth_ft: "8,200 ft" },
      ],
    },
    details: {
      motor: {
        motor: "Cummins , Volvo, Iveco, Ford",
        motor_capacity: "6.7 Lt",
        max_power: "280Hp @2100 rpm",
        fuel_tank_capacity: "200 Lt",
        emission_certificate: "Tier 3-4 Sertifikalı",
        motor_torque: "1700 Nm @ 1300 rpm",
        control_unit: "ECM/MEKANİK",
      },
      hydraulic_system: {
        main_hydraulic_pump: {
          type: "Değişken debili eksenel pistonlu - Yük Duyarlı (Load Sensing)",
          flow_rate: "112cc",
          pressure: "350 bar",
        },
        secondary_hydraulic_pump: {
          type: "PİSTONLU",
          flow_rate: "45 cc",
          pressure: "350 bar",
        },
        third_hydraulic_pump: {
          type: "PİSTONLU",
          flow_rate: "28 cc",
          pressure: "280 bar",
        },
        fourth_pump: {
          type: "DİŞLİ",
          flow_rate: "19 cc",
          pressure: "200 bar",
        },
        fifth_pump: {
          type: "DİŞLİ",
          flow_rate: "8 cc",
          pressure: "200 bar",
        },
        wireline_hydromotor: "400 cc",
        mud_pump_hydromotor: "800 cc",
        main_winch_hydromotor: "80 cc",
        hydraulic_control_panels: "190 LİTRE",
        hydraulic_tank_capacity: "400 Litre",
        cooler: "ÇİFT SİSTEM SOĞUTMA",
        filters: "TANK DÖNÜŞ, EMİŞ, BASINÇ, MORSET",
      },
      morse_module: {
        rotation_motor: "140 cc",
        morse_inner_diameter: "119mm",
        jaw: "7 adet",
        jaw_holding_force: "184.700 N",
        jaw_type: "HİDROLİK SIKMA YAYLI AÇMA",
      },
      mechanical_transmission: {
        main_gear_ratio: "2:1",
        gearbox_ratios: [
          { gear: "1. VİTES", ratio: "6,27:1", speed: "160rpm – 260rpm", torque: "9.784 Nm - 6.002 Nm" },
          { gear: "2. VİTES", ratio: "3,12:1", speed: "320 rpm – 522 rpm", torque: "4.868 Nm - 2.986 Nm" },
          { gear: "3. VİTES", ratio: "1,75:1", speed: "571 rpm – 930 rpm", torque: "2.730 Nm – 1.675 Nm" },
          { gear: "4. VİTES", ratio: "1,00:1", speed: "1.000 rpm – 1630 rpm", torque: "1.560 Nm – 957 Nm" },
        ],
      },
      tower: {
        drilling_angle: "45° Yatay Açı - 90° Dik Açı Arası",
        feed_length: "335cm",
        pulling_force: "18.000kg",
        pushing_force: "24.000 kg",
        tower_features: [
          "Teleskopik Olarak Açılan Kule",
          "6 mt Çekme Kapasitesi",
          "Bağımsız 2 Adet Hidrolik Kule Açma Pistonu",
          "Hidrolik Yana Kayabilen Morset",
          "Kuleye Monte Ana Vinç",
          "Acil Durum Güvenlik Halatı",
        ],
      },
      winch_and_rope_system: {
        main_winch: [
          "Sabit Hızlı Hidrolik Tahrikli Tambur Motoru",
          "18.000 Kg. Çekme Kapasitesi",
          "15m/dk Çekme Hızı",
          "18mm Çapında Çelik Halat",
        ],
        wireline_winch: [
          "37 kN Boş Tambur Kuvveti",
          "8,9 kN Dolu Tambur Kuvveti",
          "130m/d Boş Tambur Hızı",
          "550m/d Dolu Tambur Hızı",
          "6 mm Çapında, 1.600m Çelik Halat",
        ],
      },
      track: "STRICKLAND SRL 12 TON",
    },
  },
  {
    name: "MD-300",
    imageUrl: "/md2500.jpeg",
    capacities: {
      rods: [
        { type: "PWL", diameter: "114,3 mm", depth: "600 m", depth_ft: "1,968 ft" },
        { type: "HWL", diameter: "88,9 mm", depth: "1,000 m", depth_ft: "3,280 ft" },
        { type: "NWL", diameter: "69,9 mm", depth: "1,500 m", depth_ft: "4,920 ft" },
        { type: "BWL", diameter: "54 mm", depth: "2,000 m", depth_ft: "6,560 ft" },
      ],
    },
    details: {
      motor: {
        motor: "Cummins , Volvo, Iveco, Ford",
        motor_capacity: "6.7 Lt",
        max_power: "220-280 Hp @ 2200 rpm",
        fuel_tank_capacity: "400 Lt",
        emission_certificate: "Tier-3 Sertifikalı",
        motor_torque: "987 Nm @ 1500 RPM",
        control_unit: "ECM",
      },
      hydraulic_system: {
        main_hydraulic_pump: {
          type: "Değişken debili eksenel pistonlu - Yük Algılama",
          flow_rate: "80 cc",
          pressure: "280 bar",
        },
        secondary_hydraulic_pump: {
          type: "DEMİR DİŞLİ POMPA",
          flow_rate: "32 cc",
          pressure: "230 bar",
        },
        third_hydraulic_pump: {
          type: "DİŞLİ POMPA",
          flow_rate: "19 cc",
          pressure: "180 bar",
        },
        fourth_pump: {
          type: "DİŞLİ POMPA",
          flow_rate: "19 cc",
          pressure: "180 bar",
        },
        fifth_pump: {
          type: "DİŞLİ POMPA",
          flow_rate: "8 cc",
          pressure: "180 bar",
        },
        wireline_hydromotor: "310 cc",
        mud_pump_hydromotor: "100 cc",
        main_winch_hydromotor: "80 cc",
        hydraulic_control_panels: "PANEL İÇİN HİDROLİK ELEMANLAR",
        hydraulic_tank_capacity: "200 Lt",
        cooler: "Çift Soğutma",
        filters: "TANK DÖNÜŞ, EMİŞ, BASINÇ, MORSET",
      },
      morse_module: {
        rotation_motor: "80 cc",
        morse_inner_diameter: "119 mm",
        jaw: "5 parça",
        jaw_holding_force: "110.700 K",
        jaw_type: "Hidrolik Kelepçe, Yay Açılır",
      },
      mechanical_transmission: {
        main_gear_ratio: "2: 1",
        gearbox_ratios: [
          { gear: "1. Vites", ratio: "6,27: 1", speed: "160 RPM", torque: "3.987 Nm" },
          { gear: "2. Vites", ratio: "3,12: 1", speed: "320 RPM", torque: "1984 Nm" },
          { gear: "3. Vites", ratio: "1,75: 1", speed: "571 RPM", torque: "1115 Nm" },
          { gear: "4. Vites", ratio: "1,00: 1", speed: "1.000 RPM", torque: "634 Nm" },
        ],
      },
      tower: {
        drilling_angle: "45 ° ila – 90 ° Dikey",
        feed_length: "335cm",
        pulling_force: "12.500 kilo",
        pushing_force: "8.000 kg",
        tower_features: [
          "Teleskopik Katlanır Kule",
          "6 mt Çekme Kapasitesi",
          "Bağımsız 2 Hidrolik Piston",
          "Hidrolik Yana Kayabilen Morset",
          "Kuleye Monte Ana Vinç",
          "Acil Durum Güvenlik Halatı",
        ],
      },
      winch_and_rope_system: {
        main_winch: [
          "Sabit hız",
          "9.000 Kg. Çekme Kapasitesi",
          "15m / dk Çekme Hızı",
          "18mm Çelik Halat",
        ],
        wireline_winch: [
          "37 kN Çıplak Tambur Gücü",
          "8,9 kN Tam Tambur Gücü",
          "130m / d Çıplak Tambur Hızı",
          "550m / d Tam Tambur Hızı",
          "6 mm Çap, 1.300m Çelik Halat",
        ],
      },
      track: "STRICKLAND 8 – 12 Ton",
      mud_pump: {
        type: "Tripleks",
        piston_count: "3",
        flow_rate: "135 lt / dk",
        working_pressure: "500 psi",
        max_pressure: "700 psi",
        piston_type: "Dalgıç",
        suction_system: "Valf topu",
        suction_flange_size: "2 ″",
        discharge_flange_size: "1 / ¼ ″",
      },
    },
  },
  
];

export default function Machines() {
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (machine:any) => {
    setSelectedMachine(machine);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMachine(null);
  };

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
        <h2 className="text-3xl font-bold text-center mb-8">Makinalarımız</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {machineData.map((machine, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-4">{machine.name}</h3>
              <img src={machine.imageUrl} alt={machine.name} className="mb-4 w-full h-48 object-cover" />
              <table className="w-full mb-4">
                <thead>
                  <tr>
                    <th className="border px-2 py-1">Rod Diameter</th>
                    <th className="border px-2 py-1">Depth</th>
                    <th className="border px-2 py-1">Depth (ft)</th>
                  </tr>
                </thead>
                <tbody>
                  {machine.capacities.rods.map((rod, rodIndex) => (
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
                Detaylar
              </button>
            </div>
          ))}
        </div>
       
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} machine={selectedMachine} />
    </main>
  );
}
