import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import LotusPetals from '../components/LotusPetals';

const QUESTION_TIME_LIMIT = 20;

const QUESTION_BANK = [
  {
    id: 'q1',
    prompt: 'Theo quan điểm của nhóm, nhận định trong đề bài được đánh giá như thế nào?',
    options: {
      A: 'Hoàn toàn đúng',
      B: 'Hoàn toàn sai',
      C: 'Đúng một phần nhưng chưa đầy đủ',
      D: 'Không thể đánh giá'
    },
    correct: 'C'
  },
  {
    id: 'q2',
    prompt: 'Theo lý luận Mác - Lênin, dân chủ trước hết được hiểu là gì?',
    options: {
      A: 'Quyền tự do ngôn luận',
      B: 'Quyền lực thuộc về nhân dân',
      C: 'Quyền bầu cử',
      D: 'Quyền tham gia mạng xã hội'
    },
    correct: 'B'
  },
  {
    id: 'q3',
    prompt: 'Tư tưởng "dân là chủ, dân làm chủ" nhấn mạnh điều gì?',
    options: {
      A: 'Vai trò của nhà nước',
      B: 'Vai trò của lãnh đạo',
      C: 'Vai trò chủ thể của nhân dân',
      D: 'Vai trò của truyền thông'
    },
    correct: 'C'
  },
  {
    id: 'q4',
    prompt: 'Dân chủ xã hội chủ nghĩa được xem là nền dân chủ như thế nào so với dân chủ tư sản?',
    options: {
      A: 'Giống nhau hoàn toàn',
      B: 'Thấp hơn',
      C: 'Cao hơn về chất',
      D: 'Không liên quan'
    },
    correct: 'C'
  },
  {
    id: 'q5',
    prompt: 'Điểm cốt lõi của dân chủ xã hội chủ nghĩa là gì?',
    options: {
      A: 'Tự do mạng xã hội',
      B: 'Quyền lực thực sự thuộc về nhân dân',
      C: 'Phát triển công nghệ',
      D: 'Tự do báo chí'
    },
    correct: 'B'
  },
  {
    id: 'q6',
    prompt: 'Theo bài trình bày, mạng xã hội được xác định là gì trong đời sống dân chủ?',
    options: {
      A: 'Là bản chất của dân chủ xã hội chủ nghĩa',
      B: 'Là biểu hiện cao nhất của dân chủ xã hội chủ nghĩa',
      C: 'Là công cụ hỗ trợ dân chủ',
      D: 'Là thiết chế quyền lực nhà nước'
    },
    correct: 'C'
  },
  {
    id: 'q7',
    prompt: 'Bản chất chính trị của dân chủ xã hội chủ nghĩa thể hiện ở đâu?',
    options: {
      A: 'Người dân chỉ được phát biểu',
      B: 'Nhà nước quản lý toàn bộ',
      C: 'Nhân dân là chủ thể quyền lực và tham gia quản lý',
      D: 'Chỉ có lãnh đạo quyết định'
    },
    correct: 'C'
  },
  {
    id: 'q8',
    prompt: 'Bản chất kinh tế của dân chủ xã hội chủ nghĩa yêu cầu điều gì?',
    options: {
      A: 'Tăng trưởng kinh tế đơn thuần',
      B: 'Quyền dân chủ gắn với lợi ích thực tế của người dân',
      C: 'Tự do kinh doanh tuyệt đối',
      D: 'Không liên quan kinh tế'
    },
    correct: 'B'
  },
  {
    id: 'q9',
    prompt: 'Bản chất tư tưởng - văn hóa - xã hội hướng tới điều gì?',
    options: {
      A: 'Tự do tuyệt đối cá nhân',
      B: 'Công bằng, bình đẳng, phát triển toàn diện con người',
      C: 'Kiểm soát thông tin',
      D: 'Phát triển công nghệ'
    },
    correct: 'B'
  },
  {
    id: 'q10',
    prompt: 'Nội dung nào sau đây không phải tiêu chí đầy đủ để đánh giá quyền lực thuộc về nhân dân?',
    options: {
      A: 'Tham gia bầu cử',
      B: 'Có quyền đăng bài viral',
      C: 'Giám sát quyền lực nhà nước',
      D: 'Được hưởng thành quả phát triển'
    },
    correct: 'B'
  },
  {
    id: 'q11',
    prompt: 'Việc nhân dân tham gia vào bộ máy nhà nước thể hiện qua đâu?',
    options: {
      A: 'Mạng xã hội',
      B: 'Biểu tình',
      C: 'Bầu cử và cơ quan đại diện',
      D: 'Báo chí'
    },
    correct: 'C'
  },
  {
    id: 'q12',
    prompt: 'Vì sao "viral" trên mạng chưa chắc là ý chí chung của nhân dân?',
    options: {
      A: 'Vì ít người dùng',
      B: 'Vì bị ảnh hưởng bởi cảm xúc, thuật toán, tin giả',
      C: 'Vì không có internet',
      D: 'Vì không có chính phủ'
    },
    correct: 'B'
  },
  {
    id: 'q13',
    prompt: 'Việc chính quyền "lắng nghe" trên mạng mới là bước nào trong quá trình thực hiện dân chủ?',
    options: {
      A: 'Bước cuối cùng',
      B: 'Không quan trọng',
      C: 'Bước đầu trong quá trình thực hiện dân chủ',
      D: 'Sự thay thế cho pháp luật'
    },
    correct: 'C'
  },
  {
    id: 'q14',
    prompt: 'Theo bài trình bày, vai trò của nhà nước xã hội chủ nghĩa là gì?',
    options: {
      A: 'Thay thế nhân dân quyết định mọi việc',
      B: 'Biến quyền làm chủ của nhân dân từ lý tưởng thành hiện thực',
      C: 'Chỉ quản lý kinh tế',
      D: 'Kiểm soát mạng xã hội là chính'
    },
    correct: 'B'
  },
  {
    id: 'q15',
    prompt: 'Nhà nước pháp quyền xã hội chủ nghĩa phải hoạt động trên cơ sở nào?',
    options: {
      A: 'Thuật toán mạng xã hội',
      B: 'Cảm xúc đám đông',
      C: 'Hiến pháp và pháp luật',
      D: 'Xu hướng truyền thông'
    },
    correct: 'C'
  },
  {
    id: 'q16',
    prompt: 'Mạng xã hội không thể thay thế điều gì?',
    options: {
      A: 'Giao tiếp',
      B: 'Thể chế, pháp luật và nhà nước',
      C: 'Thông tin',
      D: 'Giải trí'
    },
    correct: 'B'
  },
  {
    id: 'q17',
    prompt: 'Tiêu chí đầy đủ nhất để đánh giá dân chủ xã hội chủ nghĩa là gì?',
    options: {
      A: 'Người dân nói nhiều',
      B: 'Người dân nổi tiếng',
      C: 'Nhân dân được tham gia, quyết định, giám sát và hưởng lợi',
      D: 'Nhiều nền tảng mạng'
    },
    correct: 'C'
  },
  {
    id: 'q18',
    prompt: 'Kết luận đúng nhất của nhóm là gì?',
    options: {
      A: 'Mạng xã hội là dân chủ',
      B: 'Dân chủ chỉ là phát biểu',
      C: 'Mạng xã hội là công cụ hỗ trợ, không phải bản chất dân chủ',
      D: 'Dân chủ không cần nhà nước'
    },
    correct: 'C'
  }
];

const EFFECT_POOL = [
  'plus5',
  'plus5',
  'plus5',
  'plus5',
  'plus10',
  'plus10',
  'plus10',
  'plus10',
  'minus5',
  'minus5',
  'minus5',
  'minus10',
  'minus10',
  'minus10',
  'bomb',
  'bomb',
  'bomb',
  'bomb',
  'specialPlus5',
  'specialPlus5'
];

const EFFECT_META = {
  plus5: {
    badge: '+5',
    title: 'Cộng 5 điểm cho nhóm',
    tone: 'positive',
    description: ''
  },
  plus10: {
    badge: '+10',
    title: 'Cộng 10 điểm cho nhóm',
    tone: 'positive',
    description: ''
  },
  minus5: {
    badge: '-5',
    title: 'Trừ 5 điểm của nhóm',
    tone: 'negative',
    description: ''
  },
  minus10: {
    badge: '-10',
    title: 'Trừ 10 điểm của nhóm',
    tone: 'negative',
    description: ''
  },
  bomb: {
    badge: 'BOM',
    title: 'Trừ 5 điểm của nhóm bị chỉ định',
    tone: 'bomb',
    description: ''
  },
  specialPlus5: {
    badge: 'ĐB+',
    title: 'Cộng ngay 5 điểm cho nhóm',
    tone: 'special',
    description: ''
  },
  specialMinus5: {
    badge: 'ĐB-',
    title: 'Trừ ngay 5 điểm của nhóm',
    tone: 'special',
    description: ''
  }
};

const INSTANT_EFFECTS = new Set(['specialPlus5', 'specialMinus5']);

function shuffleArray(items) {
  const cloned = [...items];

  for (let index = cloned.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [cloned[index], cloned[swapIndex]] = [cloned[swapIndex], cloned[index]];
  }

  return cloned;
}

function createBoard() {
  const shuffledEffects = shuffleArray(EFFECT_POOL);
  const shuffledQuestions = shuffleArray(QUESTION_BANK);
  let questionIndex = 0;

  return shuffledEffects.map((effect, index) => {
    const isSpecial = INSTANT_EFFECTS.has(effect);

    return {
      id: `tile-${index + 1}`,
      slot: index + 1,
      effect,
      question: isSpecial ? null : shuffledQuestions[questionIndex++],
      used: false
    };
  });
}

function GamePage() {
  const [board, setBoard] = useState(() => createBoard());
  const [activeTileId, setActiveTileId] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT);
  const [timedOut, setTimedOut] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const backgroundAudioRef = useRef(null);

  const activeTile = activeTileId ? board.find((tile) => tile.id === activeTileId) ?? null : null;
  const activeQuestion = activeTile?.question ?? null;
  const answerRevealed = Boolean(activeQuestion && (selectedOption || timedOut));
  const isCorrect = Boolean(activeQuestion && selectedOption && !timedOut && activeQuestion.correct === selectedOption);

  useEffect(() => {
    return () => {
      if (backgroundAudioRef.current) {
        backgroundAudioRef.current.pause();
        backgroundAudioRef.current.currentTime = 0;
      }
    };
  }, []);

  useEffect(() => {
    if (!activeQuestion || selectedOption || timedOut) {
      return undefined;
    }

    setTimeLeft(QUESTION_TIME_LIMIT);

    const countdown = window.setInterval(() => {
      setTimeLeft((current) => {
        if (current <= 1) {
          window.clearInterval(countdown);
          setTimedOut(true);
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(countdown);
  }, [activeQuestion, activeTileId, selectedOption, timedOut]);

  const toggleMusic = async () => {
    const backgroundAudio = backgroundAudioRef.current;

    if (!backgroundAudio) {
      return;
    }

    if (musicEnabled) {
      backgroundAudio.pause();
      backgroundAudio.currentTime = 0;
      setMusicEnabled(false);
      return;
    }

    backgroundAudio.loop = true;

    try {
      await backgroundAudio.play();
      setMusicEnabled(true);
    } catch (error) {
      console.error('Không thể phát nhạc nền:', error);
      setMusicEnabled(false);
    }
  };

  const resetTurnState = () => {
    setSelectedOption(null);
    setTimeLeft(QUESTION_TIME_LIMIT);
    setTimedOut(false);
  };

  const openTile = (tile) => {
    if (tile.used) {
      return;
    }

    setActiveTileId(tile.id);
    resetTurnState();
  };

  const closeOverlayWithoutUsingTile = () => {
    setActiveTileId(null);
    resetTurnState();
  };

  const finishTile = () => {
    if (!activeTileId) {
      return;
    }

    setBoard((currentBoard) =>
      currentBoard.map((tile) => (tile.id === activeTileId ? { ...tile, used: true } : tile))
    );
    setActiveTileId(null);
    resetTurnState();
  };

  const handleAnswerSelect = (optionKey) => {
    if (!activeQuestion || selectedOption || timedOut) {
      return;
    }

    setSelectedOption(optionKey);
  };

  const resetGame = () => {
    setBoard(createBoard());
    setActiveTileId(null);
    resetTurnState();
  };

  const getOptionState = (optionKey) => {
    if (!answerRevealed || !activeQuestion) {
      return '';
    }

    if (optionKey === activeQuestion.correct) {
      return 'correct';
    }

    if (optionKey === selectedOption && optionKey !== activeQuestion.correct) {
      return 'incorrect';
    }

    return 'muted';
  };

  const renderEffectCard = (tile) => {
    const effect = EFFECT_META[tile.effect];

    return (
      <div className={`game-effect-card ${effect.tone}`}>
        <div className="game-effect-badge">{effect.badge}</div>
        <div className="game-effect-copy">
          <h3>{effect.title}</h3>
          <p>{effect.description}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="game-page" id="tro-choi">
      <LotusPetals className="game-petals" />
      <audio ref={backgroundAudioRef} src="/music/music.mp3" preload="auto" loop />
      <div className="container game-page-inner">
        <div className="game-shell">
          <div className="game-toolbar">
            <div className="game-toolbar-copy">
              <span className="game-page-label">Minigame</span>
              <h1>Ô số may mắn</h1>
            </div>

            <div className="game-toolbar-actions">
              <Link to="/" className="game-toolbar-link">
                Về trang chủ
              </Link>
              <button type="button" className="game-toolbar-button" onClick={toggleMusic}>
                {musicEnabled ? 'Tắt nhạc nền' : 'Bật nhạc nền'}
              </button>
              <button type="button" className="game-toolbar-button danger" onClick={resetGame}>
                Làm mới
              </button>
            </div>
          </div>

          <div className="game-board-wrap">
            <div className="game-grid" aria-label="Bảng trò chơi 20 ô">
              {board.map((tile) =>
                tile.used ? (
                  <div key={tile.id} className="game-tile-empty" aria-hidden="true"></div>
                ) : (
                  <button
                    key={tile.id}
                    type="button"
                    className="game-tile"
                    onClick={() => openTile(tile)}
                    aria-label={`Mở ô số ${tile.slot}`}
                  >
                    <span>{tile.slot}</span>
                  </button>
                )
              )}
            </div>

            {activeTile ? (
              <div className="game-overlay" role="dialog" aria-modal="true">
                <div className={`game-modal ${activeQuestion ? '' : 'special-modal'}`.trim()}>
                  <div className="game-modal-top">
                    <div>
                      <span className="game-modal-kicker">
                        Ô số {activeTile.slot}
                        {activeQuestion ? ' • Câu hỏi trắc nghiệm' : ' • Ô đặc biệt'}
                      </span>
                      {/* <h3>{activeQuestion ? 'Trả lời câu hỏi' : 'Ô đặc biệt'}</h3> */}
                    </div>

                    <div className="game-modal-side">
                      {activeQuestion && !answerRevealed ? (
                        <div className={`game-timer-chip ${timeLeft <= 5 ? 'warning' : ''}`.trim()}>
                          Còn {timeLeft}s
                        </div>
                      ) : null}

                      {!answerRevealed && activeQuestion ? (
                        <button
                          type="button"
                          className="game-toolbar-link subtle"
                          onClick={closeOverlayWithoutUsingTile}
                        >
                          Hủy mở ô
                        </button>
                      ) : null}
                    </div>
                  </div>

                  {activeQuestion ? (
                    <>
                      <div className="game-question-card">
                        <p>{activeQuestion.prompt}</p>
                      </div>

                      <div className="game-answer-grid">
                        {Object.entries(activeQuestion.options).map(([key, value]) => {
                          const optionState = getOptionState(key);

                          return (
                            <button
                              key={key}
                              type="button"
                              className={`game-answer-option ${optionState}`.trim()}
                              onClick={() => handleAnswerSelect(key)}
                              disabled={answerRevealed}
                            >
                              <div className="game-answer-head">
                                <span className="game-answer-letter">{key}</span>
                                <span className="game-answer-text">{value}</span>
                              </div>

                              {answerRevealed ? (
                                <span className={`game-answer-state ${optionState}`.trim()}>
                                  {optionState === 'correct'
                                    ? '✓ Đáp án đúng'
                                    : optionState === 'incorrect'
                                      ? '✕ Đáp án đã chọn'
                                      : ''}
                                </span>
                              ) : null}
                            </button>
                          );
                        })}
                      </div>

                      {answerRevealed ? (
                        <div className="game-resolution">
                          <div className={`game-result-card ${isCorrect ? 'correct' : 'incorrect'}`}>
                            <h3>{isCorrect ? 'Trả lời đúng' : timedOut ? 'Hết thời gian' : 'Trả lời sai'}</h3>
                            <p>
                              {isCorrect
                                ? 'Đáp án chính xác.'
                                : timedOut
                                  ? `Đã hết ${QUESTION_TIME_LIMIT} giây. Đáp án đúng là ${activeQuestion.correct}.`
                                  : `Đáp án đúng là ${activeQuestion.correct}.`}
                            </p>
                          </div>

                          {isCorrect ? renderEffectCard(activeTile) : null}

                          <button type="button" className="button-primary game-close-button" onClick={finishTile}>
                            Đóng câu này
                          </button>
                        </div>
                      ) : null}
                    </>
                  ) : (
                    <div className="game-resolution special-only">
                      {renderEffectCard(activeTile)}
                      <button type="button" className="button-primary game-close-button" onClick={finishTile}>
                        Đóng câu này
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GamePage;
