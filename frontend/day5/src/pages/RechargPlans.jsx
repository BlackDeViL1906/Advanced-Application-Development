import React, { useEffect } from "react";

const RechargePlans = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://ippocloud.com/api/v1/plans/mobile/prepaid-plans";
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Authorization:
              "Basic " +
              btoa("live_65d82a266acc7:e2040ca8e7c219552d3ba62dfab92571"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ operator_code: "RP", circle_code: "KA" }),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <div>{/* Your React component */}</div>;
};

export default RechargePlans;
