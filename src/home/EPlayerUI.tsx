import React from 'react';

// =========================================================================
// 🌟 EPlayerX 自动渲染排版组件 (由 Cloudflare Worker 数据大盘全自动推送)
// 说明：直接在你的项目中 Import 以下组件即可获得极致的排版与巨型评分视觉效果
// =========================================================================

export function EPlayerHero({ item, block }: { item: any, block: any }) {
  if (!item) return null;
  const scoreVal = item.vote_average || 0;
  const intScore = Math.floor(scoreVal);
  const decScore = Math.round((scoreVal % 1) * 10);
  
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden group mb-6 rounded-3xl shadow-2xl">
      <img src={item.backdrop_path || item.poster_path} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent"></div>
      
      <div className="absolute left-6 bottom-10 md:left-12 md:bottom-12 z-30 max-w-lg">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tighter drop-shadow-lg">{item.title}</h2>
        <p className="text-gray-300 text-xs md:text-sm line-clamp-2 md:line-clamp-3 mb-4 drop-shadow-md font-medium">{item.overview}</p>
      </div>

      {block.showScore && scoreVal > 0 && (
        <div className="absolute right-6 bottom-10 md:right-12 md:bottom-12 flex flex-col items-end justify-end z-30 pointer-events-none">
          {item.logo && (
            <img src={item.logo} alt="logo" className="h-14 md:h-24 object-contain mb-[-10px] md:mb-[-15px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] z-10" />
          )}
          <div className="text-white text-[70px] md:text-[110px] leading-none font-black italic tracking-tighter drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] flex items-baseline">
             <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">{intScore}</span>
             <span className="text-[45px] md:text-[70px] bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">.{decScore}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export function EPlayerPoster({ item, block }: { item: any, block: any }) {
  if (!item) return null;
  const scoreVal = item.vote_average || 0;
  return (
    <div className="relative w-32 md:w-44 shrink-0 group cursor-pointer">
      <div className="w-full aspect-[2/3] rounded-2xl overflow-hidden bg-gray-800 relative shadow-md">
        <img src={item.poster_path} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
        
        {block.showScore && scoreVal > 0 && (
          <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white text-[11px] font-black px-1.5 py-0.5 rounded-md flex items-center gap-1 z-20 shadow-lg border border-white/20">
            <span className="text-yellow-400 text-[10px] mb-[1px]">★</span>{scoreVal.toFixed(1)}
          </div>
        )}
      </div>
      <p className="mt-2 text-sm text-gray-200 font-bold truncate group-hover:text-white transition-colors">{item.title}</p>
    </div>
  );
}
