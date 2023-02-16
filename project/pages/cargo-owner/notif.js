import React from "react";

const data = [
  {
    judul: "Pemberitahuan proses pengajuan DO disetujui",
    detail:
      "Delivery Order yang anda ajukan telah disetujui dengan nomor DOXC6HYTEH silakan lihat pada menu list permohonan untuk mengetahuidetail",
  },
  {
    judul: "Pemberitahuan proses pengajuan DO disetujui",
    detail:
      "Delivery Order yang anda ajukan telah disetujui dengan nomor DOXC6HYTEH silakan lihat pada menu list permohonan untuk mengetahuidetail",
  },
  {
    judul: "Pemberitahuan proses pengajuan DO disetujui",
    detail:
      "Delivery Order yang anda ajukan telah disetujui dengan nomor DOXC6HYTEH silakan lihat pada menu list permohonan untuk mengetahuidetail",
  },
];

export default function notif() {
  return (
    <>
      <div className="w-screen h-screen bg-[#EBEFF2] p-20 pt-10">
        <p className="text-4xl text-black font-bold mb-10">Notifications</p>
        {data.map((item) => (
          <button className="w-full flex flex-col flex-initial bg-white text-black p-10 rounded-xl space-y-2 border border-gray-400 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-[1.005] hover:shadow-xl hover:shadow-slate-200 hover:bg-blue-100 duration-300 mb-5">
            <p className="text-lg font-bold">{item.judul}</p>
            <p>{item.detail}</p>
          </button>
        ))}
      </div>
    </>
  );
}
