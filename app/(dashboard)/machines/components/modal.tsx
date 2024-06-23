import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const Modal = ({ isOpen, onClose, machine }:any) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 py-10" onClose={onClose}>
        <Transition.Child
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as="div"
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
<Dialog.Panel className="w-full max-w-sm md:max-w-3xl mt-10 p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl max-h-screen overflow-y-auto">





{machine ? (
                  <>
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      {machine.name} Teknik Bilgileri
                    </Dialog.Title>
                    <div className="mt-2">
                      <table className="w-full mb-4">
                        <thead>
                          <tr>
                            <th className="border px-2 py-1">Rod Diameter</th>
                            <th className="border px-2 py-1">Depth</th>
                            <th className="border px-2 py-1">Depth (ft)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {machine.capacities.rods.map((rod:any, rodIndex:any) => (
                            <tr key={rodIndex}>
                              <td className="border px-2 py-1">{rod.diameter}</td>
                              <td className="border px-2 py-1">{rod.depth}</td>
                              <td className="border px-2 py-1">{rod.depth_ft}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {machine.details && (
                        <div className="mt-4">
                          <h4 className="font-semibold">Motor</h4>
                          <p><strong>Motor:</strong> {machine.details.motor.motor}</p>
                          <p><strong>Motor Hacmi:</strong> {machine.details.motor.motor_capacity}</p>
                          <p><strong>Maksimum Güç:</strong> {machine.details.motor.max_power}</p>
                          <p><strong>Yakıt Tankı Kapasitesi:</strong> {machine.details.motor.fuel_tank_capacity}</p>
                          <p><strong>Emisyon Sertifikası:</strong> {machine.details.motor.emission_certificate}</p>
                          <p><strong>Motor Tork Değeri:</strong> {machine.details.motor.motor_torque}</p>
                          <p><strong>Kontrol Ünitesi:</strong> {machine.details.motor.control_unit}</p>

                          <h4 className="font-semibold mt-4">Hidrolik Sistem</h4>
                          <p><strong>Ana Hidrolik Pompa:</strong> {machine.details.hydraulic_system.main_hydraulic_pump.type}, {machine.details.hydraulic_system.main_hydraulic_pump.flow_rate}, {machine.details.hydraulic_system.main_hydraulic_pump.pressure}</p>
                          <p><strong>İkinci Hidrolik Pompa:</strong> {machine.details.hydraulic_system.secondary_hydraulic_pump.type}, {machine.details.hydraulic_system.secondary_hydraulic_pump.flow_rate}, {machine.details.hydraulic_system.secondary_hydraulic_pump.pressure}</p>
                          <p><strong>Üçüncü Hidrolik Pompa:</strong> {machine.details.hydraulic_system.third_hydraulic_pump.type}, {machine.details.hydraulic_system.third_hydraulic_pump.flow_rate}, {machine.details.hydraulic_system.third_hydraulic_pump.pressure}</p>
                          <p><strong>Dördüncü Pompa:</strong> {machine.details.hydraulic_system.fourth_pump.type}, {machine.details.hydraulic_system.fourth_pump.flow_rate}, {machine.details.hydraulic_system.fourth_pump.pressure}</p>
                          <p><strong>Beşinci Pompa:</strong> {machine.details.hydraulic_system.fifth_pump.type}, {machine.details.hydraulic_system.fifth_pump.flow_rate}, {machine.details.hydraulic_system.fifth_pump.pressure}</p>
                          <p><strong>Wireline Hidromotoru:</strong> {machine.details.hydraulic_system.wireline_hydromotor}</p>
                          <p><strong>Çamur Pompası Hidromotoru:</strong> {machine.details.hydraulic_system.mud_pump_hydromotor}</p>
                          <p><strong>Ana Vinç Hidromotoru:</strong> {machine.details.hydraulic_system.main_winch_hydromotor}</p>
                          <p><strong>Hidrolik Tank Kapasitesi:</strong> {machine.details.hydraulic_system.hydraulic_tank_capacity}</p>
                          <p><strong>Soğutucu:</strong> {machine.details.hydraulic_system.cooler}</p>
                          <p><strong>Filtreler:</strong> {machine.details.hydraulic_system.filters}</p>

                          <h4 className="font-semibold mt-4">Morset Modülü</h4>
                          <p><strong>Rotasyon Motoru:</strong> {machine.details.morse_module.rotation_motor}</p>
                          <p><strong>Morset İç Çap:</strong> {machine.details.morse_module.morse_inner_diameter}</p>
                          <p><strong>Çene:</strong> {machine.details.morse_module.jaw}</p>
                          <p><strong>Çene Tutma Kuvveti:</strong> {machine.details.morse_module.jaw_holding_force}</p>
                          <p><strong>Çene Tipi:</strong> {machine.details.morse_module.jaw_type}</p>

                          <h4 className="font-semibold mt-4">Mekanik Şanzıman</h4>
                          <p><strong>Ana Dişli Oranı:</strong> {machine.details.mechanical_transmission.main_gear_ratio}</p>
                          {machine.details.mechanical_transmission.gearbox_ratios.map((gearbox:any, index:any) => (
                            <p key={index}><strong>{gearbox.gear}:</strong> {gearbox.ratio}, {gearbox.speed}, {gearbox.torque}</p>
                          ))}

                          <h4 className="font-semibold mt-4">Kule</h4>
                          <p><strong>Sondaj Açısı:</strong> {machine.details.tower.drilling_angle}</p>
                          <p><strong>Besleme Uzunluğu:</strong> {machine.details.tower.feed_length}</p>
                          <p><strong>Çekme Kuvveti:</strong> {machine.details.tower.pulling_force}</p>
                          <p><strong>Basma Kuvveti:</strong> {machine.details.tower.pushing_force}</p>
                          {machine.details.tower.tower_features.map((feature:any, index:any) => (
                            <p key={index}>{feature}</p>
                          ))}

                          <h4 className="font-semibold mt-4">Vinç ve Halat Sistemi</h4>
                          <h5 className="font-semibold">Ana Vinç</h5>
                          {machine.details.winch_and_rope_system.main_winch.map((winch:any, index:any) => (
                            <p key={index}>{winch}</p>
                          ))}
                          <h5 className="font-semibold">Wireline Vinç</h5>
                          {machine.details.winch_and_rope_system.wireline_winch.map((winch:any, index:any) => (
                            <p key={index}>{winch}</p>
                          ))}

                          <h4 className="font-semibold mt-4">Palet</h4>
                          <p>{machine.details.track}</p>
                        </div>
                      )}
                    </div>
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={onClose}
                      >
                        Kapat
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="text-center text-gray-500">Yükleniyor...</div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )}


  export default Modal
