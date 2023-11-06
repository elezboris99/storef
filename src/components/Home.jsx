import React from "react";

function Home() {
  return (
   

        <div className="container shadow mt-5 border">
          <div className="row">
            <div className="col-md-4 col-sm-6 bg-light text-center border-end border-bottom py-5 px-3">
              <i className="bi bi-people text-danger fs-1"></i>
              <h4 className="mb-3 fw-normal text-uppercase">Zajednica</h4>
              <p className="text-secondary">Nasa prodavnica broji stotine zadovoljnih korisnika na mesecnom nivou. Pristupacnim cenama i kvalitetnim proizvodima Elez prodavnice privlace sve veci broj novih musterija.</p>
            </div>
            <div className="col-md-4 col-sm-6 bg-light text-center border-end border-bottom py-5 px-3">
              <i className="bi bi-images text-danger fs-1"></i>
              <h4 className="mb-3 fw-normal text-uppercase">Nastanak</h4>
              <p className="text-secondary">Preduzece Elez je registrovano 2023. godine</p>
            </div>
            <div className="col-md-4 col-sm-6 bg-light text-center border-bottom py-5 px-3">
              <i className="bi bi-shop text-danger fs-1"></i>
              <h4 className="mb-3 fw-normal text-uppercase">Online prodavnica</h4>
              <p className="text-secondary">Online prodavnica je veoma intuitivna i laka za rad, klikom na link u navigacionom baru mozete pogledati proizvode iz ponude.</p>
            </div>
            <div className="col-md-4 col-sm-6 bg-light text-center border-end py-5 px-3">
              <i className="bi bi-pencil-square text-danger fs-1"></i>
              <h4 className="mb-3 fw-normal text-uppercase">Lokacije</h4>
              <p className="text-secondary">Nase radnje se nalaze na tri lokacije: Visnjicka 123, Beograd<br></br> Bulevar Oslobodjenja bb, Novi Sad <br></br> Jurija Gagarina bb, Beograd</p>
            </div>
            <div className="col-md-4 col-sm-6 bg-light text-center border-end py-5 px-3">
              <i className="bi bi-briefcase text-danger fs-1"></i>
              <h4 className="mb-3 fw-normal text-uppercase">Kontakt</h4>
              <p className="text-secondary">Mozete nas kontaktirati putem emaila: elez.boris@gmail.com, ili na broj telefona 064-539-7242</p>
            </div>
            <div className="col-md-4 col-sm-6 bg-light text-center py-5 px-3">
              <i className="bi bi-book text-danger fs-1"></i>
              <h4 className="mb-3 fw-normal text-uppercase">Popusti</h4>
              <p className="text-secondary">U nasim radnjama do 30.11. 2023 godine vas ceka penzionerski popust u iznosu do 10%, kao i popust za nove bracne parove u iznosu do 15%.</p>
            </div>
          </div>
        </div>

    
  );
}

export default Home;
