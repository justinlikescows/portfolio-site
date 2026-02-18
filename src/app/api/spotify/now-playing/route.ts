import { getNowPlaying, getRecentlyPlayed } from "@/lib/spotify";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
      // Not currently playing, fetch recently played
      const recentResponse = await getRecentlyPlayed();
      
      if (recentResponse.status === 200) {
        const recent = await recentResponse.json();
        const track = recent.items[0]?.track;
        
        if (track) {
          return NextResponse.json({
            isPlaying: false,
            title: track.name,
            artist: track.artists.map((artist: any) => artist.name).join(", "),
            album: track.album.name,
            albumImageUrl: track.album.images[0]?.url,
            songUrl: track.external_urls.spotify,
          });
        }
      }
      
      return NextResponse.json({
        isPlaying: false,
        title: "Not Playing",
        artist: "Spotify",
        album: "",
        albumImageUrl: null,
        songUrl: "https://open.spotify.com",
      });
    }

    const song = await response.json();
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists
      .map((artist: any) => artist.name)
      .join(", ");
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0]?.url;
    const songUrl = song.item.external_urls.spotify;

    return NextResponse.json({
      isPlaying,
      title,
      artist,
      album,
      albumImageUrl,
      songUrl,
    });
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    return NextResponse.json(
      {
        isPlaying: false,
        title: "Error",
        artist: "Unable to fetch data",
        album: "",
        albumImageUrl: null,
        songUrl: "https://open.spotify.com",
      },
      { status: 200 }
    );
  }
}
