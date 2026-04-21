import React, { useEffect } from 'react';

const sectionOneCards = [
  {
    eyebrow: 'Đúng ở chỗ',
    text: 'Mạng xã hội tạo không gian để người dân bày tỏ ý kiến, phản ánh vấn đề, góp ý và tạo sức ép dư luận.'
  },
  {
    eyebrow: 'Chưa đầy đủ ở chỗ',
    text: 'Dân chủ xã hội chủ nghĩa không chỉ là quyền được nói, mà là quyền lực thực sự thuộc về nhân dân.'
  }
];

const sectionOneCorePoints = [
  'Mạng xã hội giúp tiếng nói người dân lan tỏa nhanh hơn.',
  'Cơ quan công quyền có thể tiếp nhận và phản hồi trước áp lực dư luận.',
  'Nhưng đó chưa phải tiêu chí cao nhất của dân chủ xã hội chủ nghĩa.',
  'Cốt lõi phải là nhà nước, pháp luật và cơ chế bảo đảm quyền làm chủ thực tế của nhân dân.'
];

const sectionTwoDisplay = [
  {
    title: 'Dân chủ là gì',
    icon: 'people',
    bullets: [
      'Theo nội dung lý luận, dân chủ trước hết là quyền lực thuộc về nhân dân.',
      'Nhân dân là chủ thể của đời sống chính trị và xã hội.',
      'Dân chủ không chỉ dừng ở việc phát biểu ý kiến, mà còn là quyền tham gia vào quá trình quản lý nhà nước và xã hội.'
    ]
  },
  {
    title: 'Dân chủ xã hội chủ nghĩa là gì',
    icon: 'institution',
    bullets: [
      'Là nền dân chủ mới, ra đời sau dân chủ tư sản.',
      'Có chất lượng cao hơn vì hướng đến việc bảo đảm quyền làm chủ thực sự của đông đảo nhân dân lao động.'
    ]
  }
];

const sectionThreeBlocks = [
  {
    title: 'Bản chất chính trị',
    bullets: [
      'Dân chủ xã hội chủ nghĩa là nền dân chủ do nhân dân làm chủ.',
      'Nhà nước là công cụ thể hiện và bảo vệ quyền làm chủ của nhân dân.',
      'Nhân dân không chỉ là đối tượng được quản lý mà còn là chủ thể tham gia quản lý nhà nước và xã hội.'
    ]
  },
  {
    title: 'Bản chất kinh tế',
    bullets: [
      'Dân chủ không chỉ là quyền chính trị.',
      'Muốn quyền làm chủ có ý nghĩa thực tế thì phải có cơ sở kinh tế bảo đảm.',
      'Quyền dân chủ phải gắn với lợi ích thiết thực của người dân, với lao động, phân phối, điều kiện sống và sự phát triển xã hội.'
    ]
  },
  {
    title: 'Bản chất tư tưởng, văn hóa, xã hội',
    bullets: [
      'Hướng tới công bằng, bình đẳng.',
      'Tạo điều kiện cho con người phát triển toàn diện.',
      'Hài hòa lợi ích cá nhân với lợi ích tập thể và lợi ích xã hội.'
    ]
  }
];

const sectionThreeImages = [
  'https://lsx.vn/wp-content/uploads/2022/05/Mau-giay-moi-hop-to-dan-pho.jpg',
  'https://bcp.cdnchinhphu.vn/thumb_w/640/334894974524682240/2022/5/19/nguoi-lao-dong-1652932093755389645488.jpg',
  'https://dienbientv.vn/dataimages/202509/original/images3237943_1.jpg'
];

const sectionFourDisplay = [
  {
    number: '01',
    title: 'Nhân dân thực sự tham gia vào bộ máy quyền lực nhà nước',
    bullets: [
      'Thông qua bầu cử.',
      'Thông qua các cơ quan đại diện như Quốc hội, Hội đồng nhân dân.',
      'Thông qua các hình thức dân chủ trực tiếp.'
    ]
  },
  {
    number: '02',
    title: 'Quyền dân chủ được bảo đảm bằng Hiến pháp và pháp luật',
    bullets: [
      'Người dân không chỉ được nói.',
      'Ý kiến của dân phải có cơ chế tiếp nhận, xử lý, phản hồi và bảo vệ bằng pháp luật.'
    ]
  },
  {
    number: '03',
    title: 'Có cơ chế kiểm tra, giám sát và phản biện',
    bullets: [
      'Nhân dân có quyền giám sát hoạt động của bộ máy nhà nước.',
      'Có khả năng kiểm soát việc thực thi quyền lực.'
    ]
  },
  {
    number: '04',
    title: 'Nhân dân được hưởng thành quả phát triển xã hội',
    bullets: [
      'Quyền làm chủ phải đi đôi với quyền lợi thực tế.',
      'Bao gồm lợi ích về kinh tế, văn hóa, giáo dục, đời sống và cơ hội phát triển.'
    ]
  }
];

const sectionFiveBlocks = [
  {
    title: 'Ý chính',
    paragraphs: ['Nhà nước xã hội chủ nghĩa là thiết chế giúp biến quyền làm chủ của nhân dân từ lý tưởng thành hiện thực.']
  },
  {
    title: 'Nội dung',
    bullets: [
      'Nhà nước phải là nhà nước của nhân dân, do nhân dân, vì nhân dân.',
      'Hoạt động trên cơ sở Hiến pháp và pháp luật.',
      'Bảo đảm quyền con người, quyền công dân.',
      'Kiểm soát quyền lực nhà nước.'
    ]
  },
  {
    title: 'Kết luận',
    paragraphs: [
      'Vì vậy, dân chủ xã hội chủ nghĩa không thể chỉ được hiểu trong phạm vi mạng xã hội, mà phải được thể hiện ở toàn bộ hệ thống chính trị, pháp luật và đời sống xã hội.'
    ]
  }
];

const sectionSixBlocks = [
  {
    title: 'Đánh giá chung',
    paragraphs: [
      'Mạng xã hội có thể là công cụ hỗ trợ dân chủ, nhưng không phải là bản chất, càng không phải là biểu hiện cao nhất của dân chủ xã hội chủ nghĩa.'
    ]
  },
  {
    title: 'Những mặt tích cực',
    bullets: [
      'Giúp người dân bày tỏ quan điểm nhanh hơn.',
      'Giúp phản ánh các vấn đề xã hội rộng hơn.',
      'Tạo sức ép dư luận để cơ quan có thẩm quyền chú ý và phản hồi.'
    ]
  },
  {
    title: 'Hạn chế',
    bullets: [
      'Chỉ là phương tiện, không phải thiết chế quyền lực.',
      'Không thay thế được pháp luật, nhà nước và cơ chế tổ chức xã hội.',
      'Có thể chịu tác động bởi cảm xúc đám đông, tin giả, thuật toán nền tảng hoặc nhóm có ảnh hưởng lớn.'
    ]
  }
];

const sectionSevenBlocks = [
  {
    number: '01',
    title: 'Mạng xã hội chỉ là phương tiện, không phải thiết chế quyền lực',
    paragraphs: ['Nó giúp bày tỏ quan điểm nhưng không phải là cơ quan quyền lực nhà nước.']
  },
  {
    number: '02',
    title: 'Viral không đồng nghĩa với ý chí chung của nhân dân',
    paragraphs: ['Một nội dung lan truyền mạnh chưa chắc phản ánh đầy đủ lợi ích và quan điểm của toàn dân.']
  },
  {
    number: '03',
    title: 'Chính quyền lắng nghe chưa đồng nghĩa quyền lực thực sự thuộc về nhân dân',
    paragraphs: [
      'Lắng nghe mới chỉ là bước đầu. Điều quan trọng hơn là phải có tiếp nhận chính thức, phản hồi minh bạch và thể chế hóa thành chính sách khi cần.'
    ]
  },
  {
    number: '04',
    title: 'Mạng xã hội không bảo đảm đầy đủ các điều kiện của dân chủ xã hội chủ nghĩa',
    paragraphs: [
      'Dân chủ xã hội chủ nghĩa còn bao gồm quyền tham gia quản lý nhà nước, quyền giám sát quyền lực và quyền được bảo đảm lợi ích thực tế về kinh tế, văn hóa, giáo dục, xã hội.'
    ]
  }
];

const sectionEightBlocks = [
  {
    number: '01',
    title: 'Tham gia bộ máy nhà nước',
    image:
      'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2023/4/29/bc3-16827362250611420861539.jpg'
    , description:
      'Nhân dân thực hiện quyền làm chủ thông qua bầu cử, ứng cử và tham gia vào các cơ quan đại diện của nhà nước.'
  },
  {
    number: '02',
    title: 'Góp ý chính sách, pháp luật',
    description:
      'Người dân có thể tham gia đóng góp ý kiến cho các dự thảo chính sách, pháp luật và các chương trình phát triển của xã hội.',
    image: 'https://cdn.fpt-is.com/vi/chinh-phu-so-2.png'
  },
  {
    number: '03',
    title: 'Giám sát và phản biện xã hội',
    description:
      'Công dân, các tổ chức chính trị - xã hội và cộng đồng có quyền giám sát việc thực thi quyền lực, phản ánh vấn đề thực tiễn và kiến nghị điều chỉnh.',
    image:
      'https://xdcs.cdnchinhphu.vn/zoom/600_315/446259493575335936/2023/8/16/hop-1692181009851892234604-100-0-600-800-crop-16921810144952139734488.jpg'
  },
  {
    number: '04',
    title: 'Hưởng thành quả phát triển',
    description:
      'Quyền làm chủ phải gắn với lợi ích thiết thực của người dân về an sinh, giáo dục, y tế và điều kiện sống ngày càng tốt hơn.',
    image:
      'https://vitamvocviet.vn/upload/photos/1/1.%202024%20Tin%20t%E1%BB%A9c/7.2024/7.23.24%20quy%20vi%20tam%20voc%20viet%20vsf%20%20trao%20tang%20sua%20tai%20khu%20vuc%20phia%20nam.jpg'
  }
];

const conclusionParagraphs = [
  'Quyền lực trong dân chủ xã hội chủ nghĩa phải thực sự thuộc về nhân dân.',
  'Mạng xã hội chỉ là công cụ hỗ trợ, không phải bản chất của dân chủ.',
  'Nhà nước, pháp luật và cơ chế bảo đảm mới là nền tảng để quyền làm chủ được thực hiện trong thực tế.'
];

const conclusionEmphasisText =
  'Dân chủ xã hội chủ nghĩa là quyền lực thực sự của nhân dân, không thể rút gọn thành tiếng nói trên mạng xã hội.';

function Icon({ name }) {
  const icons = {
    network: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="M8.2 11.1 15.8 7" />
        <path d="M8.2 12.9 15.8 17" />
      </svg>
    ),
    dialogue: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H17a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H11l-4 4v-4H6.5A2.5 2.5 0 0 1 4 12.5z" />
      </svg>
    ),
    people: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9.5" cy="7" r="3" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 4.13a3 3 0 0 1 0 5.74" />
      </svg>
    ),
    institution: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10h18" />
        <path d="M5 10v8" />
        <path d="M10 10v8" />
        <path d="M14 10v8" />
        <path d="M19 10v8" />
        <path d="M2 21h20" />
        <path d="m12 3 9 5H3z" />
      </svg>
    ),
    law: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" />
        <path d="M5 7h14" />
        <path d="m7 7-3 5h6z" />
        <path d="m20 12-3 5h6z" />
      </svg>
    ),
    state: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3 9 5H3z" />
        <path d="M4 10h16" />
        <path d="M6 10v8" />
        <path d="M10 10v8" />
        <path d="M14 10v8" />
        <path d="M18 10v8" />
        <path d="M2 21h20" />
      </svg>
    )
  };

  return icons[name] ?? icons.dialogue;
}

function ContentBlock({ title, paragraphs, bullets, icon }) {
  return (
    <article className="presentation-card reveal-child">
      <div className="presentation-card-head">
        <div className="presentation-icon">{icon ? <Icon name={icon} /> : <Icon name="dialogue" />}</div>
        <h3>{title}</h3>
      </div>

      {paragraphs ? paragraphs.map((item) => <p key={item}>{item}</p>) : null}

      {bullets ? (
        <ul className="presentation-list">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .stagger-up');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="presentation-home">
      <section className="hero presentation-hero section-light" id="hero">
        <div className="presentation-hero-backdrop" aria-hidden="true">
          <span className="presentation-orbit orbit-a"></span>
          <span className="presentation-orbit orbit-b"></span>
          <span className="presentation-orbit orbit-c"></span>
          <span className="presentation-grid-line grid-a"></span>
          <span className="presentation-grid-line grid-b"></span>
          <span className="presentation-grid-line grid-c"></span>
        </div>

        <div className="container presentation-hero-inner">
          <div className="presentation-hero-copy reveal">
            <h1>
              <span className="presentation-title-main">Dân chủ xã hội chủ nghĩa và</span>
              <span className="presentation-title-accent">nhà nước xã hội chủ nghĩa</span>
            </h1>
            <div className="presentation-actions">
              <a href="#section-1" className="presentation-button">
                Xem nội dung
              </a>
              <a href="#section-9" className="presentation-button secondary">
                Xem kết luận
              </a>
            </div>

            <div className="hero-course-meta">
              <span className="hero-course-code">MLN131</span>
              <span className="hero-course-divider"></span>
              <span className="hero-course-lecturer">Giảng viên: Cô Nguyễn Thùy Phương</span>
            </div>
          </div>

          <figure className="presentation-hero-visual reveal-left">
            <div className="presentation-hero-image-frame">
              <img
                src="https://premedia.vneconomy.vn/files/uploads/2026/04/20/de2f391509b046009effceeb3276e8d2-84342.jpg"
                alt="Hình minh họa về đối thoại xã hội và thể chế"
                loading="eager"
              />
            </div>
          </figure>
        </div>
      </section>

      <section className="section presentation-section section-light" id="section-1">
        <div className="container">
          <div className="presentation-section-head reveal">
            <span className="section-label">Phần I</span>
            <h2>Mạng xã hội có phải là biểu hiện cao nhất của dân chủ xã hội chủ nghĩa?</h2>
          </div>

          <div className="opening-issue-board reveal">
            <div className="opening-issue-top">
              <div className="opening-issue-panel opening-issue-panel-wide">
                <span className="opening-issue-panel-label"><h2>Vấn đề cần làm rõ</h2></span>
                <blockquote className="opening-issue-quote">
                  “Người dân có thể tự do bình luận, chia sẻ, tạo kiến nghị viral trên mạng xã hội và buộc chính quyền
                  phải lắng nghe — đây chính là biểu hiện cao nhất của nền dân chủ xã hội chủ nghĩa mà Mác - Lênin đã đề
                  ra.”
                </blockquote>
              </div>
            </div>

            <div className="opening-issue-bottom">
              <div className="opening-issue-left">
                <div className="opening-issue-panel opening-issue-panel-tall">
                  <h3>Lập luận trung tâm của nhóm</h3>
                  <ul className="opening-issue-list">
                    {sectionOneCorePoints.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="opening-issue-right">
                <div className="opening-issue-card-grid stagger-up">
                  {sectionOneCards.map((item, index) => (
                    <article
                      key={item.eyebrow}
                      className={`opening-issue-card ${index === 0 ? 'is-positive' : 'is-warning'} reveal-child`}
                    >
                      <span className="opening-issue-card-label">{item.eyebrow}</span>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>

                <div className="opening-issue-callout">
                  Từ đó, nhóm sẽ phân tích: mạng xã hội có thể là công cụ hỗ trợ dân chủ, nhưng không thể đồng nhất với
                  bản chất của dân chủ xã hội chủ nghĩa.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section presentation-section section-dark" id="section-2">
        <div className="container">
          <div className="presentation-section-head reveal">
            <span className="section-label">Phần II</span>
            <h2>Khái niệm dân chủ và dân chủ xã hội chủ nghĩa</h2>
          </div>

          <div className="presentation-two-column-spotlight stagger-up">
            <div className="presentation-two-column-stack">
              {sectionTwoDisplay.map((block) => (
                <ContentBlock key={block.title} title={block.title} bullets={block.bullets} icon={block.icon} />
              ))}
            </div>

            <aside className="presentation-visual reveal">
              <div className="presentation-visual-shell presentation-image-shell">
                <img
                  src="https://cdn.accgroup.vn/wp-content/uploads/2022/01/xa-hoi-chu-nghia-la-gi-1.jpg"
                  alt="Hình minh họa về dân chủ xã hội chủ nghĩa"
                  loading="lazy"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section presentation-section section-light" id="section-3">
        <div className="container">
          <div className="presentation-section-head reveal">
            <span className="section-label">Phần III</span>
            <h2>Bản chất của dân chủ xã hội chủ nghĩa theo Mác - Lênin</h2>
          </div>

          <div className="presentation-section-three-layout stagger-up">
            <article className="presentation-numbered-card reveal-child">
              <div className="presentation-numbered-head">
                <span className="presentation-numbered-badge">01</span>
                <h3>{sectionThreeBlocks[0].title}</h3>
              </div>
              <div className="presentation-numbered-body">
                <div className="presentation-numbered-media-layout">
                  <div className="presentation-numbered-copy">
                    <ul className="presentation-list">
                      {sectionThreeBlocks[0].bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="presentation-numbered-image">
                    <img src={sectionThreeImages[0]} alt={sectionThreeBlocks[0].title} loading="lazy" />
                  </div>
                </div>
              </div>
            </article>

            <div className="presentation-section-three-grid">
              {sectionThreeBlocks.slice(1).map((block, index) => (
                <article key={block.title} className="presentation-numbered-card reveal-child presentation-numbered-card-vertical">
                  <div className="presentation-numbered-head">
                    <span className="presentation-numbered-badge">{`0${index + 2}`}</span>
                    <h3>{block.title}</h3>
                  </div>
                  <div className="presentation-numbered-body">
                    <div className="presentation-numbered-copy">
                      <ul className="presentation-list">
                        {block.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={`presentation-numbered-image presentation-numbered-image-vertical ${index === 1 ? 'is-lowered' : ''}`}>
                      <img src={sectionThreeImages[index + 1]} alt={block.title} loading="lazy" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section presentation-section section-dark" id="section-4">
        <div className="container">
          <div className="presentation-section-head reveal">
            <span className="section-label">Phần IV</span>
            <h2>Tiêu chí cho thấy quyền lực thực sự thuộc về nhân dân</h2>
          </div>

          <div className="presentation-grid presentation-grid-two presentation-argument-grid stagger-up">
            {sectionFourDisplay.map((block, index) => {
              const criteriaIcons = ['people', 'law', 'dialogue', 'state'];

              return (
                <article key={block.number} className="presentation-numbered-card presentation-argument-card reveal-child">
                  <div className="presentation-argument-head">
                    <span className="presentation-argument-icon">
                      <Icon name={criteriaIcons[index] ?? 'dialogue'} />
                    </span>
                    <h3>{block.title}</h3>
                  </div>
                  <div className="presentation-numbered-body">
                    <ul className="presentation-list">
                      {block.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section presentation-section section-light" id="section-5">
        <div className="container">
          <div className="presentation-section-head reveal">
            <span className="section-label">Phần V</span>
            <h2>Vai trò của nhà nước pháp quyền xã hội chủ nghĩa</h2>
          </div>

          <div className="presentation-section-five-split stagger-up">
            <aside className="presentation-visual reveal">
              <div className="presentation-visual-shell presentation-image-shell presentation-section-five-image">
                <img
                  src="https://cdn.xanhsm.com/2025/01/76c8add9-nha-quoc-hoi-viet-nam-6.jpg"
                  alt="Hình minh họa về Nhà Quốc hội Việt Nam"
                  loading="lazy"
                />
              </div>
            </aside>

            <div className="presentation-section-five-layout">
              <ContentBlock title={sectionFiveBlocks[0].title} paragraphs={sectionFiveBlocks[0].paragraphs} icon="institution" />

              <div className="presentation-section-five-grid">
                <ContentBlock title={sectionFiveBlocks[1].title} bullets={sectionFiveBlocks[1].bullets} icon="law" />
                <ContentBlock title={sectionFiveBlocks[2].title} paragraphs={sectionFiveBlocks[2].paragraphs} icon="state" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section presentation-section section-dark" id="section-6">
        <div className="container">
          <div className="presentation-section-head reveal">
            <span className="section-label">Phần VI</span>
            <h2>Vai trò của mạng xã hội đối với dân chủ</h2>
          </div>

          <div className="presentation-section-six-split stagger-up">
            <div className="presentation-content-stack">
              <ContentBlock title={sectionSixBlocks[0].title} paragraphs={sectionSixBlocks[0].paragraphs} icon="network" />

              <div className="presentation-comparison-grid">
                <ContentBlock title={sectionSixBlocks[1].title} bullets={sectionSixBlocks[1].bullets} icon="dialogue" />
                <ContentBlock title={sectionSixBlocks[2].title} bullets={sectionSixBlocks[2].bullets} icon="network" />
              </div>
            </div>

            <aside className="presentation-visual reveal">
              <div className="presentation-visual-shell presentation-image-shell presentation-section-six-image">
                <img src="/pic/pic.png" alt="Hình minh họa cho vai trò của mạng xã hội" loading="lazy" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section presentation-section section-light" id="section-7">
        <div className="container">
          <div className="presentation-section-head reveal">
            <span className="section-label">Phần VII</span>
            <h2>Phản biện nhận định “biểu hiện cao nhất”</h2>
          </div>

          <div className="presentation-grid presentation-grid-two presentation-argument-grid stagger-up">
            {sectionSevenBlocks.map((block, index) => {
              const argumentIcons = ['network', 'people', 'dialogue', 'law'];

              return (
                <article key={block.number} className="presentation-numbered-card presentation-argument-card reveal-child">
                  <div className="presentation-argument-head">
                    <span className="presentation-argument-icon">
                      <Icon name={argumentIcons[index] ?? 'dialogue'} />
                    </span>
                    <h3>{block.title}</h3>
                  </div>
                  <div className="presentation-numbered-body">
                    {block.paragraphs.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section presentation-section section-dark" id="section-8">
        <div className="container">
          <div className="presentation-section-head reveal">
            <span className="section-label">Phần VIII</span>
            <h2>Liên hệ thực tiễn</h2>
          </div>

          <div className="presentation-grid-two presentation-practice-grid stagger-up">
            {sectionEightBlocks.map((block) => (
              <article key={block.number} className="presentation-numbered-card presentation-practice-card reveal-child">
                <div className="presentation-numbered-head">
                  <span className="presentation-numbered-badge">{block.number}</span>
                  <h3>{block.title}</h3>
                </div>

                <div className="presentation-numbered-body presentation-practice-body">
                  <p>{block.description}</p>

                  <div className="presentation-practice-image">
                    <img src={block.image} alt={block.title} loading="lazy" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section presentation-section presentation-conclusion section-light" id="section-9">
        <div className="container">
          <div className="presentation-section-head reveal">
            <span className="section-label">Kết luận</span>
            <h2>Kết luận</h2>
          </div>

          <div className="presentation-conclusion-wrap reveal">
            <div className="presentation-conclusion-copy">
              {conclusionParagraphs.map((paragraph, index) => (
                <div key={paragraph} className="presentation-conclusion-point">
                  <span className="presentation-conclusion-point-number">{`0${index + 1}`}</span>
                  <p>{paragraph}</p>
                </div>
              ))}
            </div>

            <div className="presentation-conclusion-emphasis">
              <span className="presentation-conclusion-emphasis-label">Chốt</span>
              <p>{conclusionEmphasisText}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
