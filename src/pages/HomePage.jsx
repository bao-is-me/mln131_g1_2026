import React, { useEffect } from 'react';

const sectionOneBlocks = [
  {
    title: 'Đề bài đặt ra',
    content: [
      'Nhận định cần phân tích là:',
      '“Ngày nay, người dân có thể tự do bình luận, chia sẻ, tạo kiến nghị viral trên mạng xã hội và buộc chính quyền phải lắng nghe — đây chính là biểu hiện cao nhất của nền dân chủ xã hội chủ nghĩa mà Mác - Lênin đã đề ra.”'
    ]
  },
  {
    title: 'Nhận định của nhóm',
    content: ['Nhóm xác định đây là ý kiến đúng một phần, nhưng chưa đầy đủ và chưa chính xác nếu tuyệt đối hóa.']
  },
  {
    title: 'Giải thích sơ bộ',
    content: [
      'Đúng một phần vì mạng xã hội hiện nay tạo điều kiện để người dân bày tỏ ý kiến, phản ánh vấn đề xã hội, góp ý và tạo sức ép dư luận.',
      'Chưa đúng đầy đủ vì dân chủ xã hội chủ nghĩa không chỉ là quyền được nói trên mạng, mà cốt lõi là quyền lực thực sự thuộc về nhân dân, được bảo đảm bằng nhà nước, pháp luật và các điều kiện chính trị, kinh tế, xã hội cụ thể.'
    ]
  }
];

const sectionTwoBlocks = [
  {
    title: 'Dân chủ là gì',
    paragraphs: ['Theo nội dung lý luận, dân chủ trước hết là quyền lực thuộc về nhân dân.']
  },
  {
    title: 'Cách hiểu ngắn gọn',
    bullets: [
      'Nhân dân là chủ thể của đời sống chính trị và xã hội.',
      'Dân chủ không chỉ dừng ở việc phát biểu ý kiến, mà còn là quyền tham gia vào quá trình quản lý nhà nước và xã hội.'
    ]
  },
  {
    title: 'Dân chủ xã hội chủ nghĩa là gì',
    bullets: [
      'Là nền dân chủ mới, ra đời sau dân chủ tư sản.',
      'Có chất lượng cao hơn vì hướng đến việc bảo đảm quyền làm chủ thực sự của đông đảo nhân dân lao động.'
    ]
  }
];

const sectionThreeBlocks = [
  {
    title: '1. Bản chất chính trị',
    bullets: [
      'Dân chủ xã hội chủ nghĩa là nền dân chủ do nhân dân làm chủ.',
      'Nhà nước là công cụ thể hiện và bảo vệ quyền làm chủ của nhân dân.',
      'Nhân dân không chỉ là đối tượng được quản lý mà còn là chủ thể tham gia quản lý nhà nước và xã hội.'
    ],
    icon: 'institution'
  },
  {
    title: '2. Bản chất kinh tế',
    bullets: [
      'Dân chủ không chỉ là quyền chính trị.',
      'Muốn quyền làm chủ có ý nghĩa thực tế thì phải có cơ sở kinh tế bảo đảm.',
      'Quyền dân chủ phải gắn với lợi ích thiết thực của người dân, với lao động, phân phối, điều kiện sống và sự phát triển xã hội.'
    ],
    icon: 'economy'
  },
  {
    title: '3. Bản chất tư tưởng, văn hóa, xã hội',
    bullets: [
      'Hướng tới công bằng, bình đẳng.',
      'Tạo điều kiện cho con người phát triển toàn diện.',
      'Hài hòa lợi ích cá nhân với lợi ích tập thể và lợi ích xã hội.'
    ],
    icon: 'culture'
  }
];

const sectionFourBlocks = [
  {
    title: '1. Nhân dân thực sự tham gia vào bộ máy quyền lực nhà nước',
    bullets: [
      'Thông qua bầu cử.',
      'Thông qua các cơ quan đại diện như Quốc hội, Hội đồng nhân dân.',
      'Thông qua các hình thức dân chủ trực tiếp.'
    ],
    icon: 'vote'
  },
  {
    title: '2. Quyền dân chủ được bảo đảm bằng Hiến pháp và pháp luật',
    bullets: [
      'Người dân không chỉ được nói.',
      'Ý kiến của dân phải có cơ chế tiếp nhận, xử lý, phản hồi và bảo vệ bằng pháp luật.'
    ],
    icon: 'law'
  },
  {
    title: '3. Có cơ chế kiểm tra, giám sát và phản biện',
    bullets: [
      'Nhân dân có quyền giám sát hoạt động của bộ máy nhà nước.',
      'Có khả năng kiểm soát việc thực thi quyền lực.'
    ],
    icon: 'oversight'
  },
  {
    title: '4. Nhân dân được hưởng thành quả phát triển xã hội',
    bullets: [
      'Quyền làm chủ phải đi đôi với quyền lợi thực tế.',
      'Bao gồm lợi ích về kinh tế, văn hóa, giáo dục, đời sống và cơ hội phát triển.'
    ],
    icon: 'growth'
  }
];

const sectionFiveBlocks = [
  {
    title: 'Ý chính',
    paragraphs: ['Nhà nước xã hội chủ nghĩa là thiết chế giúp biến quyền làm chủ của nhân dân từ lý tưởng thành hiện thực.']
  },
  {
    title: 'Nội dung cần nhấn mạnh',
    bullets: [
      'Nhà nước phải là nhà nước của nhân dân, do nhân dân, vì nhân dân.',
      'Hoạt động trên cơ sở Hiến pháp và pháp luật.',
      'Bảo đảm quyền con người, quyền công dân.',
      'Kiểm soát quyền lực nhà nước.'
    ]
  },
  {
    title: 'Kết luận ý này',
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
    title: '1. Mạng xã hội chỉ là phương tiện, không phải thiết chế quyền lực',
    paragraphs: ['Nó giúp bày tỏ quan điểm nhưng không phải là cơ quan quyền lực nhà nước.'],
    icon: 'tool'
  },
  {
    title: '2. Viral không đồng nghĩa với ý chí chung của nhân dân',
    paragraphs: ['Một nội dung lan truyền mạnh chưa chắc phản ánh đầy đủ lợi ích và quan điểm của toàn dân.'],
    icon: 'viral'
  },
  {
    title: '3. Chính quyền lắng nghe chưa đồng nghĩa quyền lực thực sự thuộc về nhân dân',
    paragraphs: [
      'Lắng nghe mới chỉ là bước đầu. Điều quan trọng hơn là phải có tiếp nhận chính thức, phản hồi minh bạch và thể chế hóa thành chính sách khi cần.'
    ],
    icon: 'policy'
  },
  {
    title: '4. Mạng xã hội không bảo đảm đầy đủ các điều kiện của dân chủ xã hội chủ nghĩa',
    paragraphs: [
      'Dân chủ xã hội chủ nghĩa còn bao gồm quyền tham gia quản lý nhà nước, quyền giám sát quyền lực và quyền được bảo đảm lợi ích thực tế về kinh tế, văn hóa, giáo dục, xã hội.'
    ],
    icon: 'state'
  }
];

const conclusionParagraphs = [
  'Nhóm xác định đây là ý kiến đúng một phần, nhưng chưa đầy đủ và chưa chính xác nếu tuyệt đối hóa.',
  'Dân chủ xã hội chủ nghĩa không chỉ là quyền được nói trên mạng, mà cốt lõi là quyền lực thực sự thuộc về nhân dân, được bảo đảm bằng nhà nước, pháp luật và các điều kiện chính trị, kinh tế, xã hội cụ thể.',
  'Mạng xã hội có thể là công cụ hỗ trợ dân chủ, nhưng không phải là bản chất, càng không phải là biểu hiện cao nhất của dân chủ xã hội chủ nghĩa.',
  'Điều quan trọng nhất là quyền làm chủ của nhân dân phải được thực hiện trong thực tế, thông qua sự tham gia, giám sát, bảo đảm pháp lý và bảo đảm quyền lợi cụ thể.'
];

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
    vote: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 13 20 5" />
        <path d="m16 5 4 4" />
        <path d="M4 9h8v11H4z" />
        <path d="M12 13v7H4" />
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
    oversight: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    growth: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20h18" />
        <path d="M7 16V8" />
        <path d="M12 16V4" />
        <path d="M17 16v-6" />
      </svg>
    ),
    economy: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17 9 11l4 4 8-8" />
        <path d="M14 7h7v7" />
      </svg>
    ),
    culture: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 17A2.5 2.5 0 0 0 4 14.5V5a2 2 0 0 1 2-2h14v14" />
      </svg>
    ),
    tool: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="m14 7 3-3 3 3-3 3z" />
        <path d="M4 20 14 10" />
        <path d="m2 22 4-1-3-3z" />
      </svg>
    ),
    viral: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="12" cy="18" r="2.5" />
        <path d="m8.2 7.2 7.6 0" />
        <path d="m7.4 8.2 3.4 7.6" />
        <path d="m16.6 8.2-3.4 7.6" />
      </svg>
    ),
    policy: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M15 3v3h3" />
        <path d="M9 12h6" />
        <path d="M9 16h4" />
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

      {paragraphs
        ? paragraphs.map((item) => <p key={item}>{item}</p>)
        : null}

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

function VisualPanel({ title, description, chips, icon }) {
  return (
    <aside className="presentation-visual reveal">
      <div className="presentation-visual-shell">
        <div className="presentation-visual-icon">
          <Icon name={icon} />
        </div>
        <span className="presentation-visual-label">Minh họa gợi ý</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="presentation-chip-list">
          {chips.map((chip) => (
            <span key={chip} className="presentation-chip">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </aside>
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
            <h1>Dân chủ xã hội chủ nghĩa và nhà nước xã hội chủ nghĩa</h1>
            <p className="presentation-subtitle">Phân tích nhận định theo quan điểm Mác - Lênin</p>
            <p className="presentation-lead">
              Bài trình bày tập trung làm rõ bản chất của dân chủ xã hội chủ nghĩa, tiêu chí quyền lực thực sự thuộc về
              nhân dân, vai trò của nhà nước pháp quyền xã hội chủ nghĩa, đồng thời đánh giá đúng vị trí của mạng xã hội
              trong đời sống dân chủ hiện nay.
            </p>
            <div className="presentation-actions">
              <a href="#section-1" className="presentation-button">
                Xem nội dung
              </a>
              <a href="#section-8" className="presentation-button secondary">
                Xem kết luận
              </a>
            </div>
            <div className="hero-course-meta">
              <span className="hero-course-code">MLN131</span>
              <span className="hero-course-divider"></span>
              <span className="hero-course-lecturer">Giảng viên: Cô Nguyễn Thùy Phương</span>
            </div>
          </div>

          <div className="presentation-hero-visual reveal-left" aria-hidden="true">
            <div className="presentation-hero-panel panel-main">
              <div className="presentation-hero-panel-icon">
                <Icon name="network" />
              </div>
              <strong>Mạng kết nối xã hội</strong>
            </div>
            <div className="presentation-hero-panel panel-float">
              <div className="presentation-hero-panel-icon">
                <Icon name="dialogue" />
              </div>
              <strong>Đối thoại công dân</strong>
            </div>
            <div className="presentation-hero-panel panel-float">
              <div className="presentation-hero-panel-icon">
                <Icon name="institution" />
              </div>
              <strong>Thiết chế / nghị trường</strong>
            </div>
            <div className="presentation-hero-panel panel-float">
              <div className="presentation-hero-panel-icon">
                <Icon name="people" />
              </div>
              <strong>Cộng đồng / người dân</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section presentation-section section-light" id="section-1">
        <div className="container">
          <div className="presentation-section-head reveal">
            <span className="section-label">Phần I</span>
            <h2>Mở đầu vấn đề</h2>
          </div>

          <div className="presentation-split-layout">
            <div className="presentation-content-stack stagger-up">
              {sectionOneBlocks.map((block) => (
                <ContentBlock key={block.title} title={block.title} paragraphs={block.content} />
              ))}
            </div>

            <VisualPanel
              title="Mạng xã hội và tiếng nói công dân"
              description="Bố cục minh họa phù hợp cho phần mở đầu: nhấn vào không gian bày tỏ ý kiến, đối thoại xã hội và sự hiện diện của thiết chế công quyền."
              chips={['Mạng xã hội', 'Tiếng nói công dân', 'Đối thoại', 'Công quyền']}
              icon="network"
            />
          </div>
        </div>
      </section>

      <section className="section presentation-section section-dark" id="section-2">
        <div className="container">
          <div className="presentation-section-head reveal">
            <span className="section-label">Phần II</span>
            <h2>Khái niệm dân chủ và dân chủ xã hội chủ nghĩa</h2>
          </div>

          <div className="presentation-grid presentation-grid-three stagger-up">
            {sectionTwoBlocks.map((block, index) => (
              <ContentBlock
                key={block.title}
                title={block.title}
                paragraphs={block.paragraphs}
                bullets={block.bullets}
                icon={index === 0 ? 'people' : index === 1 ? 'dialogue' : 'institution'}
              />
            ))}
          </div>

          <div className="presentation-inline-visual reveal">
            <span>Gợi ý hình minh họa:</span>
            <div className="presentation-chip-list">
              <span className="presentation-chip">Người dân tham gia xã hội</span>
              <span className="presentation-chip">Lá phiếu / hội nghị / cộng đồng</span>
              <span className="presentation-chip">People</span>
              <span className="presentation-chip">Vote</span>
              <span className="presentation-chip">Dialogue</span>
              <span className="presentation-chip">Institution</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section presentation-section section-light" id="section-3">
        <div className="container">
          <div className="presentation-section-head reveal">
            <span className="section-label">Phần III</span>
            <h2>3. Bản chất của dân chủ xã hội chủ nghĩa theo Mác - Lênin</h2>
          </div>

          <div className="presentation-grid presentation-grid-three stagger-up">
            {sectionThreeBlocks.map((block) => (
              <ContentBlock key={block.title} title={block.title} bullets={block.bullets} icon={block.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="section presentation-section section-dark" id="section-4">
        <div className="container">
          <div className="presentation-section-head reveal">
            <span className="section-label">Phần IV</span>
            <h2>4. Tiêu chí cho thấy quyền lực thực sự thuộc về nhân dân</h2>
            <p className="presentation-section-note">Có thể chia thành 4 tiêu chí chính:</p>
          </div>

          <div className="presentation-grid presentation-grid-four stagger-up">
            {sectionFourBlocks.map((block) => (
              <ContentBlock key={block.title} title={block.title} bullets={block.bullets} icon={block.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="section presentation-section section-light" id="section-5">
        <div className="container">
          <div className="presentation-section-head reveal">
            <span className="section-label">Phần V</span>
            <h2>5. Vai trò của nhà nước pháp quyền xã hội chủ nghĩa</h2>
          </div>

          <div className="presentation-split-layout presentation-split-reverse">
            <VisualPanel
              title="Thiết chế pháp quyền và quyền làm chủ"
              description="Khối hình minh họa nên gợi đúng tinh thần pháp luật, quản trị, người dân và cơ chế bảo đảm quyền."
              chips={['Tòa nhà thể chế', 'Quyển luật', 'Cán cân công lý', 'Nhà nước và người dân']}
              icon="law"
            />

            <div className="presentation-content-stack stagger-up">
              {sectionFiveBlocks.map((block, index) => (
                <ContentBlock
                  key={block.title}
                  title={block.title}
                  paragraphs={block.paragraphs}
                  bullets={block.bullets}
                  icon={index === 0 ? 'institution' : index === 1 ? 'law' : 'state'}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section presentation-section section-dark" id="section-6">
        <div className="container">
          <div className="presentation-section-head reveal">
            <span className="section-label">Phần VI</span>
            <h2>6. Vai trò của mạng xã hội đối với dân chủ</h2>
          </div>

          <div className="presentation-content-stack stagger-up">
            <ContentBlock title={sectionSixBlocks[0].title} paragraphs={sectionSixBlocks[0].paragraphs} icon="network" />

            <div className="presentation-comparison-grid">
              <ContentBlock title={sectionSixBlocks[1].title} bullets={sectionSixBlocks[1].bullets} icon="dialogue" />
              <ContentBlock title={sectionSixBlocks[2].title} bullets={sectionSixBlocks[2].bullets} icon="viral" />
            </div>
          </div>

          <div className="presentation-inline-visual reveal">
            <span>Gợi ý hình minh họa:</span>
            <div className="presentation-chip-list">
              <span className="presentation-chip">Megaphone</span>
              <span className="presentation-chip">Message square</span>
              <span className="presentation-chip">Alert circle</span>
              <span className="presentation-chip">Users</span>
              <span className="presentation-chip">Network</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section presentation-section section-light" id="section-7">
        <div className="container">
          <div className="presentation-section-head reveal">
            <span className="section-label">Phần VII</span>
            <h2>7. Phản biện nhận định “biểu hiện cao nhất”</h2>
            <p className="presentation-section-note">Có thể chia thành 4 luận điểm phản biện rõ ràng:</p>
          </div>

          <div className="presentation-grid presentation-grid-four stagger-up">
            {sectionSevenBlocks.map((block) => (
              <ContentBlock key={block.title} title={block.title} paragraphs={block.paragraphs} icon={block.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="section presentation-section presentation-conclusion section-light" id="section-8">
        <div className="container">
          <div className="presentation-section-head reveal">
            <span className="section-label">Kết luận</span>
            <h2>Kết luận</h2>
          </div>

          <div className="presentation-conclusion-card reveal">
            {conclusionParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
