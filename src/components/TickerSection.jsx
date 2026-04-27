import React from 'react';

export default function TickerSection() {
  const brands = [
    { name: "Villa Samayra", src: "/_astro/de7a150499886d5ea337d2a14a365ddfb9cfb6f1-388x128_29kD3e.png" },
    { name: "Kaapi Solutions", src: "/_astro/21531dd132f2cfb15adfdc20bccc9408818946da-280x128_2ntkoT.png" },
    { name: "Kyesslighting", src: "/_astro/2092abb7504ea51ac68c7d97e89bdd9aa93087cd-160x128_GphkL.png" },
    { name: "Property Gully", src: "/_astro/1c173424b5bbefbf2a84641c74638ca55c57be84-188x128_Z2vgkgP.png" },
    { name: "Malens Pharmaceutical", src: "/_astro/9cb92e4d16258656a873345d95a9b4f2f58f90ed-360x128_1En3mE.png" },
    { name: "PropNcr", src: "/_astro/bbc5df234776e42770be3080cbe9533f7b0a2585-440x128_Z1QqpWR.png" },
    { name: "Riviera", src: "/_astro/d9d845c4b04dad28f6580f8711d23083351024c8-440x128_Z1cld0E.png" },
    { name: "SiddhCo", src: "/_astro/c2eea500ef814f3f6a1f6c50110dfb3c8a67738a-480x128_2nDLmB.png" },
    { name: "Vantattva", src: "/_astro/918a8b94556e617767a70286795abb5360d28428-480x128_ZzV2rt.png" },
    { name: "Bayars Coffee", src: "/_astro/c6da280774cd987c16c4dbfa5a0f98bfbcd5af7c-400x128_ZDSbLb.png" },
    { name: "Basic Soaps", src: "/_astro/25b744012daf793c8282554ba84f976033629544-412x128_Z1KuAM0.png" },
    { name: "CCTV Wala", src: "/_astro/01d2224d643b174a7b1834584b7a8a43d93588a5-440x128_ZGlYV3.png" },
    { name: "Kaapi Machines - Web Impetus Clients", src: "/_astro/ea0db4fcf1ec793e591bb782ac774385338571b8-420x160_Z2cbDq.png" },
    { name: "mopadz logo - web impetus clients", src: "/_astro/65fb307dac695a4f3eab208f936da296ceb11bda-928x257_ZoNh9p.svg" },
    { name: "US Golf Kids India - Web Impetus Client", src: "/_astro/0f9b823ce1baab1339336e35ae30d14b55420bca-533x330_195dn3.webp" },
    { name: "Auramah Valley", src: "/_astro/6a19c00716ffe64bfd6b8d288ca8c56f10b14f59-440x128_2sATLY.png" },
    { name: "Red Sirocco - Web Impetus Clients", src: "/_astro/a6c0a5af81bf39ed3623c918f466c6d75edff322-500x271_19EzgA.webp" },
    { name: "Dream Spark Events - Web Impetus Clients", src: "/_astro/7014d85bf61d7d7652c834f66f87286121cc1641-98x72_ZlM0vL.svg" },
    { name: "Get Right PC", src: "/_astro/abe9b43f4ee9fd5d23a106520c388a20dd49dc89-284x128_Z16Tafi.png" },
    { name: "Imperial Holding", src: "/_astro/a99084933bd8a505001ca512adf4e562f5db7076-260x128_ZMI4kJ.png" },
    { name: "Timber Hills - Web Impetus Client", src: "/_astro/fd7e945d0e47a8280b06df8010bff74700ef9d05-842x595_ZouKzA.svg" },
    { name: "Balance The Plate", src: "/_astro/43c8ff09954505d8ba996582a8b99581db3ae15e-480x128_KQKON.png" },
    { name: "hideaway cottage - web impetus client", src: "/_astro/d36c1e944d08374492c3fdd129ea432b9f0f3c4b-1072x554_Z2hrQ3z.png" },
    { name: "aks - web impetus client", src: "/_astro/0e71356a1c6339c85539e54d65ec7cba68b9742c-460x181_23CJCn.png" },
    { name: "Future Finvest", src: "/_astro/b19da2b489b58e0d558d70772fa69232e2f09b9e-172x128_2aDcEu.png" },
    { name: "Let's Celebrate", src: "/_astro/68722ee99c17fcd29388671215169aad56662f84-228x128_aWtNz.png" },
    { name: "ps sons", src: "/_astro/e2538a207d3b4b914300aed36d60ac4b29ac30ed-300x97_Z62ajD.png" },
  ];

  // The original ticker had 2 copies of the list to allow for a seamless scrolling effect
  const repeatedBrands = [...brands, ...brands];

  return (
    <div id="hero-ticker-section" className="hero-ticker">
      <div 
        id="ticker-wrap" 
        className="ticker-wrap"
        style={{
          '--ticker-desktop-padding': '40px 0 52px',
          '--ticker-mobile-padding': '28px 0 48px',
          '--ticker-bg': 'transparent',
          '--ticker-shift': '50%'
        }}
      >
        <p id="ticker-label" className="ticker-label">Brands we have worked with</p>
        <div id="ticker-outer" className="ticker-outer">
          <div id="ticker-track" className="ticker-track">
            {repeatedBrands.map((brand, idx) => (
              <img 
                key={`brand-${idx}`} 
                id={`ticker-brand-img-${idx}`} 
                src={brand.src} 
                alt={brand.name} 
                width="120" 
                height="64" 
                loading="lazy" 
                decoding="async" 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
