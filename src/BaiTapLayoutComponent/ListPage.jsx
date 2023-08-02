import React from "react";
import PageItem from "./PageItem";

export default function ListPage() {
  return (
    <section className="pt-4">
      <div className="container px-lg-5">
        {/* Page Features*/}
        <div className="row gx-lg-5">
          <div className="col-lg-6 col-xxl-3 mb-5">
            <PageItem />
          </div>
          <div className="col-lg-6 col-xxl-3 mb-5">
            <PageItem />
          </div>
          <div className="col-lg-6 col-xxl-3 mb-5">
            <PageItem />
          </div>
          <div className="col-lg-6 col-xxl-3 mb-5">
            <PageItem />
          </div>
        </div>
      </div>
    </section>
  );
}
