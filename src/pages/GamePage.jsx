import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import LotusPetals from '../components/LotusPetals';

const QUESTION_TIME_LIMIT = 20;

const QUESTION_BANK = [
  {
    id: 'q1',
    prompt: 'Hồ Chí Minh ra đi tìm đường cứu nước vào năm nào?',
    options: {
      A: '1911',
      B: '1920',
      C: '1930',
      D: '1945'
    },
    correct: 'A'
  },
  {
    id: 'q2',
    prompt: 'Tác phẩm “Đường Kách mệnh” gắn với ai?',
    options: {
      A: 'Võ Nguyên Giáp',
      B: 'Hồ Chí Minh',
      C: 'Phạm Văn Đồng',
      D: 'Trường Chinh'
    },
    correct: 'B'
  },
  {
    id: 'q3',
    prompt: 'Hồ Chí Minh đọc bản Sơ thảo luận cương của Lênin vào năm nào?',
    options: {
      A: '1918',
      B: '1919',
      C: '1920',
      D: '1925'
    },
    correct: 'C'
  },
  {
    id: 'q4',
    prompt: 'Câu nói “Không có gì quý hơn độc lập, tự do” gắn với ai?',
    options: {
      A: 'Hồ Chí Minh',
      B: 'Lê Duẩn',
      C: 'Phan Bội Châu',
      D: 'Trần Phú'
    },
    correct: 'A'
  },
  {
    id: 'q5',
    prompt: 'Tuyên ngôn Độc lập được đọc tại đâu?',
    options: {
      A: 'Huế',
      B: 'Sài Gòn',
      C: 'Hà Nội',
      D: 'Nghệ An'
    },
    correct: 'C'
  },
  {
    id: 'q6',
    prompt: 'Ngày Quốc khánh Việt Nam là ngày nào?',
    options: {
      A: '30/4',
      B: '2/9',
      C: '19/5',
      D: '22/12'
    },
    correct: 'B'
  },
  {
    id: 'q7',
    prompt: 'Chủ tịch Hồ Chí Minh sinh năm nào?',
    options: {
      A: '1880',
      B: '1885',
      C: '1890',
      D: '1895'
    },
    correct: 'C'
  },
  {
    id: 'q8',
    prompt: 'Tên gọi của Nguyễn Tất Thành tại Hội nghị Véc-xây là gì?',
    options: {
      A: 'Nguyễn Sinh Cung',
      B: 'Nguyễn Ái Quốc',
      C: 'Hồ Tùng Mậu',
      D: 'Lý Thụy'
    },
    correct: 'B'
  },
  {
    id: 'q9',
    prompt: 'Cách mạng Tháng Tám thành công vào năm nào?',
    options: {
      A: '1943',
      B: '1944',
      C: '1945',
      D: '1946'
    },
    correct: 'C'
  },
  {
    id: 'q10',
    prompt: 'Thủ đô của nước Việt Nam hiện nay là gì?',
    options: {
      A: 'Huế',
      B: 'Đà Nẵng',
      C: 'TP.HCM',
      D: 'Hà Nội'
    },
    correct: 'D'
  },
  {
    id: 'q11',
    prompt: 'Hồ Chí Minh gắn liền với tư tưởng nào sau đây?',
    options: {
      A: 'Độc lập dân tộc gắn liền với chủ nghĩa xã hội',
      B: 'Chỉ phát triển kinh tế tư nhân',
      C: 'Chỉ ưu tiên quân sự',
      D: 'Tách rời dân tộc với giai cấp'
    },
    correct: 'A'
  },
  {
    id: 'q12',
    prompt: 'Tác phẩm “Bản án chế độ thực dân Pháp” nhằm tố cáo điều gì?',
    options: {
      A: 'Thiên tai',
      B: 'Chế độ thực dân Pháp',
      C: 'Nạn mù chữ',
      D: 'Tệ quan liêu'
    },
    correct: 'B'
  },
  {
    id: 'q13',
    prompt: 'Ngày sinh Chủ tịch Hồ Chí Minh là ngày nào?',
    options: {
      A: '19/5',
      B: '2/9',
      C: '3/2',
      D: '30/4'
    },
    correct: 'A'
  }
];

const EFFECT_POOL = [
  'plus5',
  'plus5',
  'plus5',
  'plus10',
  'plus10',
  'plus10',
  'minus5',
  'minus5',
  'minus5',
  'minus10',
  'minus10',
  'bomb',
  'bomb',
  'specialPlus5',
  'specialMinus5'
];

const EFFECT_META = {
  plus5: {
    badge: '+5',
    title: '+5 điểm',
    tone: 'positive',
    description: 'Cộng 5 điểm cho nhóm vừa chọn.'
  },
  plus10: {
    badge: '+10',
    title: '+10 điểm',
    tone: 'positive',
    description: 'Cộng 10 điểm cho nhóm vừa chọn.'
  },
  minus5: {
    badge: '-5',
    title: '-5 điểm',
    tone: 'negative',
    description: 'Trừ 5 điểm của nhóm vừa chọn.'
  },
  minus10: {
    badge: '-10',
    title: '-10 điểm',
    tone: 'negative',
    description: 'Trừ 10 điểm của nhóm vừa chọn.'
  },
  bomb: {
    badge: 'BOM',
    title: 'Ô bom',
    tone: 'bomb',
    description: 'BOM: Trừ 5 điểm của nhóm bị chỉ định.'
  },
  specialPlus5: {
    badge: 'ĐB+',
    title: 'Ô đặc biệt +5',
    tone: 'special',
    description: 'Ô này không cần trả lời. Cộng ngay 5 điểm cho nhóm vừa chọn.'
  },
  specialMinus5: {
    badge: 'ĐB-',
    title: 'Ô đặc biệt -5',
    tone: 'special',
    description: 'Ô này không cần trả lời. Trừ ngay 5 điểm của nhóm vừa chọn.'
  }
};

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
    const isSpecial = effect === 'specialPlus5' || effect === 'specialMinus5';

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
  const remainingTiles = board.filter((tile) => !tile.used).length;

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
      console.error('Khong the phat nhac nen:', error);
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
      <LotusPetals />
      <audio ref={backgroundAudioRef} src="/mucsic/mucsic.mp3" preload="auto" loop />
      <div className="container game-page-inner">
        <div className="game-shell">
          <div className="game-toolbar">
            <div className="game-toolbar-copy">
              <span className="game-page-label">Minigame</span>
              <h1>Ô bí ẩn</h1>
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

            <div className="game-grid" aria-label="Bảng trò chơi 15 ô">
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
                <div className="game-modal">
                  <div className="game-modal-top">
                    <div>
                      <span className="game-modal-kicker">
                        Ô số {activeTile.slot}
                        {activeQuestion ? ' • Câu hỏi trắc nghiệm' : ' • Ô đặc biệt'}
                      </span>
                      <h2>{activeQuestion ? 'Trả lời câu hỏi' : 'Ô đặc biệt'}</h2>
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
