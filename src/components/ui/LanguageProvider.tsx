'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'zh';

const chinese: Record<string, string> = {
  'A collection of my research work.': '我的研究成果与论文。',
  'No publications found matching your criteria.': '未找到符合筛选条件的论文。',
  'About': '关于我', 'Publications': '论文发表', 'Selected Publications': '精选论文',
  'Awards': '获奖荣誉', 'Services': '社会服务', 'Questionnaire': '调查问卷',
  'Teaching': '教学', 'CV': '简历', 'Research Interests': '研究方向',
  'View All →': '查看全部 →', 'Education': '教育经历', 'Experience': '工作经历',
  "Master's Student": '硕士研究生', 'Hubei Institute of Fine Arts': '湖北美术学院',
  'Visiting Student': '访问学生',
  'The Hong Kong University of Science and Technology (Guangzhou)': '香港科技大学（广州）',
  'M.F.A. in Visual Communication Design Research': '视觉传达设计研究 硕士',
  'B.E. in Product Design': '产品设计 学士',
  'Part-time Technical Teacher': '兼职技术教师',
  'AF International Art Education, New Channel': '新航道 AF 国际艺术教育',
  'Intern': '实习生', 'Sinopec Marketing Co., Ltd. Hangzhou Petroleum Branch': '中国石化销售股份有限公司杭州石油分公司',
  'Mar 2026 – Present': '2026年3月 至今', '2024 – Present': '2024年 至今',
  'June 2025 – Sep 2025': '2025年6月 至 2025年9月',
  'Data-Driven Design': '数据驱动设计', 'Serious Games': '严肃游戏',
  'Human-Computer Interaction': '人机交互', 'Product Service Systems': '产品服务系统',
  'Honors and awards I have received.': '我获得的荣誉与奖项。',
  'Professional services and community involvement.': '专业服务与学术社区参与。',
  'Urban Cup Competition': 'Urban Cup 城市科学竞赛',
  '2026 International Conference on Urban Science and Intelligence': '2026 国际城市科学与智能大会',
  'OASIS Student Challenge': 'OASIS 学生挑战赛',
  'Third Prize': '三等奖', 'Second Prize': '二等奖', 'First Prize': '一等奖',
  'Finalist, 5th Place Globally': '入围，全球第5名',
  'National Second Prize': '国家级二等奖', 'National Third Prize': '国家级三等奖',
  'Provincial Bronze Award': '省级铜奖', 'Bronze Award': '铜奖', 'Silver Award': '银奖',
  'Excellence Award': '优秀奖', 'Best Experience Design Award': '最佳体验设计奖',
  'Second Prize, Third Prize': '二等奖、三等奖', 'National Third Prize ×2': '国家级三等奖 ×2',
  'National Third Prize, Provincial First Prize': '国家级三等奖、省级一等奖',
  'National Third Prize, Provincial Second/Third Prize': '国家级三等奖、省级二等奖及三等奖',
  'Beautiful China Innovation Design Competition for Graduate Students': '中国研究生“美丽中国”创新设计大赛',
  "China International College Students' Innovation Competition": '中国国际大学生创新大赛',
  'Huacan Award': '华灿奖', 'National Scholarship for Graduate Students': '研究生国家奖学金',
  'Qingtai International Industrial Design Competition': '青苔国际工业设计大赛',
  'Shenzhen International Eyewear Design Competition': '深圳国际眼镜设计大赛',
  "'Challenge Cup' Competition": '“挑战杯”竞赛',
  'International User Experience Innovation Competition': '国际用户体验创新大赛',
  'Milan Design Week - China University Design Exhibition': '米兰设计周——中国高校设计学科师生优秀作品展',
  'National Youth Designer Competition': '全国青年设计师大赛',
  'BaiLi Furniture Design Competition': '百利家具设计大赛',
  'International User Experience Innovation Competition (Huawei Special Track)': '国际用户体验创新大赛（华为专项赛道）',
  'NCDA - National College Digital Art & Design Competition': '全国高校数字艺术设计大赛（NCDA）',
  'Oriental Design Award': '东方设计奖',
  'Marine Culture Creative Design Competition for University Students': '大学生海洋文化创意设计大赛',
  'Wuhan International Creative Design Competition': '武汉国际创意设计大赛',
  'Chinese Society of Academic Degrees and Graduate Education': '中国学位与研究生教育学会',
  'Ministry of Education': '教育部', 'Cross-Strait Design Competition Committee': '两岸设计竞赛组委会',
  "Ministry of Education of the People's Republic of China": '中华人民共和国教育部',
  'Top national scholarship for graduate students.': '研究生国家级最高奖学金。',
  'China Industrial Design Association': '中国工业设计协会',
  'China Industrial Design Association, etc.': '中国工业设计协会等',
  'Shenzhen Municipal Government, etc.': '深圳市人民政府等',
  'Central Committee of the Communist Youth League, etc.': '共青团中央等',
  'University Design Exhibition Committee': '高校设计展组委会',
  'Guangdong Furniture Association': '广东省家具协会',
  'Huawei & Competition Committee': '华为及竞赛组委会', 'Competition Committee': '竞赛组委会',
  'Ocean University of China': '中国海洋大学', 'Wuhan Municipal Government': '武汉市人民政府',
  'Member of Chinese Association for Artificial Intelligence': '中国人工智能学会会员',
  'Member of Shenzhen Illustration Association': '深圳市插画协会会员',
  'Member of Hubei Provincial Arts and Crafts Society': '湖北省工艺美术学会会员',
  'Engaged in activities and discussions related to the field of AI.': '参与人工智能领域的活动与学术交流。',
  'Engaging in artistic exhibitions and creative exchanges.': '参与艺术展览及创意交流。',
  'Contributing to the local arts and crafts community.': '参与本地工艺美术社区建设。',
  'Search publications...': '搜索论文…', 'Filters': '筛选', 'Year': '年份', 'Type': '类型',
  'All': '全部', 'Link': '文章链接', 'Code': '代码', 'Abstract': '摘要',
  'journal': '期刊论文', 'conference': '会议论文', 'preprint': '预印本',
  'Copy to clipboard': '复制到剪贴板', 'Open main menu': '打开主菜单',
  'News': '最新动态', 'Last updated:': '最后更新：',
  "Yiwei Mo (Even) is a Master's student at the Hubei Institute of Fine Arts, with a research focus on the intersection of serious games, health design, and data-driven urbanism. His work explores the application of design interventions for visual health, special needs education, and enhancing everyday street vitality. He has applied for 1 invention patent, 6 utility model patents, and 4 design patents.": '莫逸伟（Even）是湖北美术学院硕士研究生，研究聚焦严肃游戏、健康设计与数据驱动城市研究的交叉领域，探索设计干预在视觉健康、特殊教育及提升日常街道活力方面的应用。已申请发明专利1项、实用新型专利6项及外观设计专利4项。',
};

const LanguageContext = createContext({
  language: 'en' as Language,
  toggleLanguage: () => {},
  t: (text: string) => text,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    try {
      if (localStorage.getItem('site-language') === 'zh') setLanguage('zh');
    } catch { /* Language switching still works when storage is unavailable. */ }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  }, [language]);

  const toggleLanguage = () => {
    const next = language === 'en' ? 'zh' : 'en';
    setLanguage(next);
    try { localStorage.setItem('site-language', next); } catch { /* Keep the in-memory preference. */ }
  };

  const t = (text: string) => language === 'zh' ? (chinese[text] ?? text) : text;

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={language === 'en' ? '切换为中文' : 'Switch to English'}
      title={language === 'en' ? '切换为中文' : 'Switch to English'}
      className="glass-panel inline-flex h-10 min-w-10 items-center justify-center rounded-lg px-2 text-sm font-semibold text-primary transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {language === 'en' ? '中' : 'EN'}
    </button>
  );
}
