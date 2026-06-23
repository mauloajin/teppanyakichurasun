const officialSite = "https://teppanyakichurasun.jimdosite.com/";
const menuUrl = "https://teppanyakichurasun.jimdosite.com/%E3%83%A1%E3%83%8B%E3%83%A5%E3%83%BC/";
const contactUrl = "https://teppanyakichurasun.jimdosite.com/%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B/";
const googleBusinessUrl = "https://maps.app.goo.gl/9TPTcRWdWKwwBaTL7";
const mapQuery = encodeURIComponent("鉄板焼きダイニング 美らSUN 沖縄県国頭郡本部町浜元189");

const japaneseKeywords = [
  "鉄板焼きダイニング 美らSUN",
  "美らSUN",
  "CHURASUN",
  "沖縄 鉄板焼き",
  "本部町 鉄板焼き",
  "本部町 レストラン",
  "本部町 ディナー",
  "本部町 BBQ",
  "本部町 ステーキ",
  "浜元 レストラン",
  "浜元 鉄板焼き",
  "国頭郡本部町 レストラン",
  "やんばる レストラン",
  "やんばる 鉄板焼き",
  "沖縄県産野菜",
  "沖縄県産車エビ",
  "車エビ 海鮮コース",
  "国産牛 サーロイン",
  "国産牛 ヒレ",
  "石垣牛 サーロイン",
  "山城牛 ヒレ",
  "アグー豚 BBQ",
  "沖縄 BBQ 予約",
  "本部町 バーベキュー",
  "ナイトBBQ 本部町",
  "オリオンビール BBQ",
  "沖縄 ステーキ ディナー",
  "本部町 予約制レストラン",
  "本部町 コース料理",
  "沖縄 鉄板焼き コース",
  "沖縄 海鮮コース",
  "本部町 海沿い レストラン",
  "浜元 ディナー",
  "本部町 記念日 ディナー",
  "本部町 誕生日 レストラン",
  "本部町 結婚記念日",
  "沖縄 アニバーサリー レストラン",
  "鉄板焼き 予約制",
  "BBQ 予約制",
  "沖縄 テイクアウト ステーキ",
  "ステーキご膳",
  "本部町 テイクアウト",
  "美ら海水族館 周辺 ディナー",
  "本部港 周辺 レストラン",
  "瀬底島 周辺 レストラン",
  "今帰仁 周辺 ディナー",
  "名護 周辺 鉄板焼き",
  "沖縄北部 ディナー",
  "沖縄北部 BBQ",
  "沖縄北部 ステーキ",
  "沖縄北部 海鮮",
  "やんばる ディナー",
  "やんばる BBQ",
  "沖縄旅行 ディナー",
  "沖縄観光 レストラン",
  "沖縄 鉄板焼き 英語メニュー",
  "本部町 英語メニュー",
  "沖縄 英語メニュー レストラン",
  "本部町 外国人旅行者 レストラン",
  "訪日旅行 沖縄 レストラン",
  "インバウンド 沖縄 レストラン",
  "沖縄 ステーキ 予約",
  "本部町 ステーキ 予約",
  "鉄板焼き 美らSUN 予約",
  "美らSUN 電話番号",
  "美らSUN 住所",
  "美らSUN 営業時間",
  "美らSUN メニュー",
  "美らSUN BBQ",
  "美らSUN ディナー",
  "美らSUN アクセス",
  "美らSUN Googleマップ",
  "美らSUN 公式サイト",
  "沖縄 国産牛 ステーキ",
  "沖縄 車エビ レストラン",
  "本部町 国産牛",
  "本部町 車エビ",
  "鉄板焼き 沖縄県産野菜",
  "紅芋スープ 鉄板焼き",
  "ガーリックチャーハン 鉄板焼き",
  "シークワーサーシャーベット",
  "沖縄 海を見ながら BBQ",
  "本部町 海を見ながら BBQ",
  "沖縄北部 予約制 BBQ",
  "本部町 予約制 BBQ",
  "沖縄 ディナー 17時",
  "本部町 ディナー 17時",
  "沖縄 BBQ 11時",
  "本部町 BBQ 11時",
  "沖縄 記念日 鉄板焼き",
  "本部町 記念日 ディナー",
  "沖縄 家族旅行 ディナー",
  "本部町 家族旅行 レストラン",
  "沖縄 観光 ディナー",
  "本部町 観光 レストラン",
  "沖縄 テラス BBQ",
  "本部町 テラス BBQ",
  "沖縄 鉄板焼き 国産牛",
  "沖縄 鉄板焼き 石垣牛",
  "沖縄 鉄板焼き 山城牛",
  "本部町 アグー豚",
  "やんばる アグー豚",
  "沖縄 鉄板焼き 美らSUN"
];

const englishKeywords = [
  "Teppanyaki Dining Chura SUN",
  "Chura SUN Motobu",
  "CHURASUN Okinawa",
  "Motobu teppanyaki restaurant",
  "Okinawa teppanyaki restaurant",
  "Motobu steak restaurant",
  "Okinawa steak dinner",
  "Motobu dinner reservation",
  "Motobu BBQ restaurant",
  "Okinawa BBQ reservation",
  "Motobu Japanese restaurant",
  "restaurant in Motobu Okinawa",
  "restaurant near Okinawa Churaumi Aquarium",
  "restaurant near Sesoko Island",
  "restaurant near Motobu Port",
  "Yanbaru restaurant",
  "Yanbaru steak restaurant",
  "Okinawa northern area dinner",
  "Motobu seafood course",
  "Okinawa kuruma prawn",
  "Okinawa wagyu style dinner",
  "Japanese beef steak Okinawa",
  "Ishigaki beef course Okinawa",
  "Yamashiro beef Okinawa",
  "Agu pork BBQ Okinawa",
  "Orion beer BBQ Okinawa",
  "Motobu course dinner",
  "reservation only dinner Okinawa",
  "reservation only BBQ Okinawa",
  "Okinawa ocean side restaurant",
  "Motobu ocean side restaurant",
  "Okinawa terrace BBQ",
  "Motobu terrace BBQ",
  "Japanese teppanyaki Motobu",
  "Okinawa teppanyaki course",
  "Japanese steak course Okinawa",
  "seafood teppanyaki Okinawa",
  "garlic fried rice teppanyaki",
  "beni-imo soup Okinawa",
  "Okinawan vegetables teppanyaki",
  "Motobu anniversary dinner",
  "Okinawa birthday dinner",
  "Okinawa family trip dinner",
  "Motobu takeout steak",
  "Okinawa takeout steak bento",
  "English menu Okinawa restaurant",
  "English menu Motobu restaurant",
  "Okinawa restaurant for international visitors",
  "Motobu restaurant for tourists",
  "Japan travel Okinawa dinner",
  "Okinawa restaurant Google Maps",
  "Chura SUN official website",
  "Chura SUN phone number",
  "Chura SUN address",
  "Chura SUN opening hours",
  "Chura SUN menu",
  "Chura SUN BBQ",
  "Chura SUN teppanyaki",
  "Motobu Hamamoto restaurant",
  "Hamamoto Motobu dinner",
  "Kunigami Motobu restaurant",
  "Okinawa dinner 5 pm",
  "Motobu dinner 5 pm",
  "Okinawa BBQ from 11 am",
  "Motobu BBQ from 11 am",
  "Okinawa sightseeing dinner",
  "Motobu sightseeing restaurant",
  "Okinawa family dinner",
  "Motobu family dinner",
  "Okinawa steak reservation",
  "Motobu steak reservation",
  "teppanyaki reservation Okinawa",
  "BBQ reservation Motobu",
  "Okinawa coastal dinner",
  "Motobu coastal dinner"
];

const faqs = [
  {
    question: "予約は必要ですか？",
    answer:
      "公式サイトではディナー鉄板焼きとBBQはいずれも予約制と案内されています。当日予約は15:00まで、BBQは午前中までの連絡が案内されています。"
  },
  {
    question: "営業時間は確認できますか？",
    answer:
      "公式サイトではディナーが17:00から22:00、ラストオーダー21:00、BBQが11:00から20:30と案内されています。ランチは11:00から14:00ですが休業中と掲載されています。"
  },
  {
    question: "英語メニューはありますか？",
    answer:
      "公式サイトに、英語メニューがあり、メール連絡でPDFコピーを送付できる旨の案内があります。英語対応スタッフについては確認できる情報がないため掲載していません。"
  },
  {
    question: "どのような料理がありますか？",
    answer:
      "国産牛サーロイン、国産牛ヒレ、沖縄県産車エビの海鮮コース、石垣牛サーロイン、山城牛ヒレ、予約制BBQなどが公式メニューに掲載されています。"
  },
  {
    question: "住所と電話番号は？",
    answer:
      "住所は沖縄県国頭郡本部町浜元189、電話番号は0980-43-6886です。"
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "鉄板焼きダイニング 美らSUN",
  alternateName: ["CHURASUN", "Teppanyaki Dining Chura SUN"],
  url: "https://teppanyakichurasun.vercel.app/",
  telephone: "+81-980-43-6886",
  address: {
    "@type": "PostalAddress",
    postalCode: "905-0216",
    addressRegion: "沖縄県",
    addressLocality: "国頭郡本部町",
    streetAddress: "浜元189",
    addressCountry: "JP"
  },
  servesCuisine: ["鉄板焼き", "ステーキ", "BBQ", "海鮮", "沖縄料理"],
  priceRange: "公式メニュー参照",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "17:00",
      closes: "22:00",
      description: "ディナー鉄板焼き 予約制、LO 21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "11:00",
      closes: "20:30",
      description: "BBQ 予約制"
    }
  ],
  hasMenu: menuUrl,
  sameAs: [officialSite, googleBusinessUrl]
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="鉄板焼きダイニング 美らSUN">
          美らSUN
        </a>
        <nav aria-label="店舗内ナビゲーション">
          <a href="#features">特徴</a>
          <a href="#info">店舗情報</a>
          <a href="#access">アクセス</a>
          <a href="#english">English</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">沖縄県本部町浜元 / Teppanyaki Steak & BBQ</p>
          <h1>鉄板焼きダイニング 美らSUN</h1>
          <p className="roman">CHURASUN / Teppanyaki Dining Chura SUN</p>
          <p className="lead">
            国産牛ステーキ、沖縄県産車エビの海鮮コース、テラスで楽しむ予約制BBQを案内している、本部町浜元の鉄板焼きダイニングです。
            公式サイト掲載情報をもとに、営業時間、住所、電話番号、メニュー、アクセス、English Guideをまとめています。
          </p>
          <div className="hero-actions">
            <a className="button primary" href={`tel:0980436886`}>電話する</a>
            <a className="button" href={officialSite}>公式サイト</a>
            <a className="button" href={googleBusinessUrl}>Googleマップ</a>
          </div>
        </div>
        <div className="hero-panel" aria-label="確認済み店舗情報">
          <div>
            <span>住所</span>
            <strong>沖縄県国頭郡本部町浜元189</strong>
          </div>
          <div>
            <span>電話</span>
            <strong>0980-43-6886</strong>
          </div>
          <div>
            <span>ディナー</span>
            <strong>17:00-22:00 / LO 21:00</strong>
          </div>
          <div>
            <span>BBQ</span>
            <strong>11:00-20:30 / 予約制</strong>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="section-heading">
          <p className="eyebrow">Features</p>
          <h2>公式情報で確認できる特徴</h2>
        </div>
        <div className="feature-grid">
          <article>
            <h3>目の前で焼き上げる鉄板焼き</h3>
            <p>
              公式サイトでは、厳選した国産牛を目の前で焼き上げること、沖縄県産野菜や紅芋スープを含むコースが案内されています。
            </p>
          </article>
          <article>
            <h3>沖縄県産車エビと海鮮コース</h3>
            <p>
              メニューには沖縄産車エビを使った海鮮コース、車エビ単品、ホタテ貝柱単品などが掲載されています。
            </p>
          </article>
          <article>
            <h3>予約制BBQ</h3>
            <p>
              BBQは11:00から20:30までの予約制として案内され、アグー豚、国産ステーキ、沖縄県産野菜などを含むコースがあります。
            </p>
          </article>
          <article>
            <h3>English Guide</h3>
            <p>
              公式サイトでは英語メニューの案内があります。英語対応スタッフなど、確認できない内容は掲載していません。
            </p>
          </article>
        </div>
      </section>

      <section className="section menu-section">
        <div className="section-heading">
          <p className="eyebrow">Menu Notes</p>
          <h2>公式メニュー掲載内容</h2>
        </div>
        <div className="menu-list">
          <div>
            <h3>ディナー鉄板焼き</h3>
            <p>国産牛サーロインステーキコース 9,800円、オーナー特選国産牛ヒレステーキコース 9,800円、沖縄産車エビ使用の海鮮コース 9,000円。</p>
          </div>
          <div>
            <h3>ブランド牛コース</h3>
            <p>特選石垣牛サーロインコース 13,500円、山城牛A5ヒレステーキコース 14,800円が公式メニューに掲載されています。</p>
          </div>
          <div>
            <h3>BBQ</h3>
            <p>4,800円、5,800円、8,000円、8,500円、10,500円のBBQコースが掲載されています。飲み放題プラン、持込み、ナイトBBQチャージの記載もあります。</p>
          </div>
        </div>
        <a className="text-link" href={menuUrl}>公式メニューを見る</a>
      </section>

      <section className="section info-access" id="info">
        <div>
          <div className="section-heading">
            <p className="eyebrow">Information</p>
            <h2>店舗基本情報</h2>
          </div>
          <dl className="info-list">
            <div>
              <dt>店舗名</dt>
              <dd>鉄板焼きダイニング 美らSUN</dd>
            </div>
            <div>
              <dt>英語表記</dt>
              <dd>Teppanyaki Dining Chura SUN</dd>
            </div>
            <div>
              <dt>ローマ字表記</dt>
              <dd>CHURASUN</dd>
            </div>
            <div>
              <dt>業態</dt>
              <dd>鉄板焼き、ステーキ、BBQ</dd>
            </div>
            <div>
              <dt>住所</dt>
              <dd>〒905-0216 沖縄県国頭郡本部町浜元189</dd>
            </div>
            <div>
              <dt>電話番号</dt>
              <dd><a href="tel:0980436886">0980-43-6886</a></dd>
            </div>
            <div>
              <dt>営業時間</dt>
              <dd>ディナー 17:00-22:00（LO 21:00） / BBQ 11:00-20:30 / ランチ 11:00-14:00（休業中）</dd>
            </div>
            <div>
              <dt>予約</dt>
              <dd>ディナー、BBQとも予約制。公式サイトでは当日予約は15:00まで、BBQは午前中までの連絡が案内されています。</dd>
            </div>
            <div>
              <dt>公式サイト</dt>
              <dd><a href={officialSite}>teppanyakichurasun.jimdosite.com</a></dd>
            </div>
            <div>
              <dt>予約・問い合わせ</dt>
              <dd><a href={contactUrl}>公式サイトのお問い合わせ</a></dd>
            </div>
          </dl>
        </div>
        <aside className="notice">
          <h2>掲載方針</h2>
          <p>
            個室、貸切、喫煙、駐車場、英語対応スタッフなど、公式サイトまたはGoogleビジネスプロフィールで確認できない項目は掲載していません。
          </p>
          <p>
            価格や営業時間は変更される場合があります。来店前に公式サイトまたは電話で最新情報をご確認ください。
          </p>
        </aside>
      </section>

      <section className="section" id="access">
        <div className="section-heading">
          <p className="eyebrow">Access</p>
          <h2>アクセス</h2>
        </div>
        <div className="map-layout">
          <div className="map-card">
            <iframe
              title="鉄板焼きダイニング 美らSUN 周辺地図"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="access-copy">
            <p>
              住所は沖縄県国頭郡本部町浜元189です。Google Maps APIは使わず、外部リンクと共有iframeのみを利用しています。
            </p>
            <div className="hero-actions compact">
              <a className="button primary" href={googleBusinessUrl}>Googleマップで開く</a>
              <a className="button" href={officialSite}>公式サイトで確認</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section english" id="english">
        <div className="section-heading">
          <p className="eyebrow">English Guide</p>
          <h2>Teppanyaki Dining Chura SUN</h2>
        </div>
        <p>
          Teppanyaki Dining Chura SUN is a teppanyaki steak and BBQ restaurant in Hamamoto, Motobu, Okinawa.
          The official website introduces Japanese beef steak courses, an Okinawan kuruma prawn seafood course,
          Okinawan vegetables, beni-imo soup, and reservation-only BBQ options.
        </p>
        <p>
          Area: Motobu, northern Okinawa. Address: 189 Hamamoto, Motobu-cho, Kunigami-gun, Okinawa 905-0216.
          Dinner is listed as 17:00-22:00 with last order at 21:00. BBQ is listed as 11:00-20:30 and reservation-only.
          For reservations or questions, use the official website or call the restaurant. The official website states
          that an English menu is available and can be sent as a PDF by email.
        </p>
        <div className="keyword-cloud">
          {englishKeywords.map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>
      </section>

      <section className="section" id="faq">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>よくある質問</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section keywords">
        <div className="section-heading">
          <p className="eyebrow">Related Keywords</p>
          <h2>関連キーワード</h2>
        </div>
        <p>
          本部町、沖縄北部、やんばる観光、鉄板焼き、ステーキ、BBQ、海鮮コース、英語メニューなど、実際に検索されやすい語句を店舗情報に沿って整理しています。
        </p>
        <div className="keyword-cloud">
          {japaneseKeywords.map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>鉄板焼きダイニング 美らSUN / Teppanyaki Dining Chura SUN</p>
        <p>情報源: 公式サイト、GoogleビジネスプロフィールURL</p>
      </footer>
    </main>
  );
}
