// Substitutability - Polymorphism

class MediaFile {
	filename: string

	constructor(filename: string) {
		this.filename = filename
	}

	play(): string {
		return `Playing ${this.filename}`
	}
}

class AudioFile extends MediaFile {
	play(): string {
		return `Playing audio: ${this.filename}`
	}
}

class VideoFile extends MediaFile {
	play(): string {
		return `Playing video: ${this.filename}`
	}
}

// 🐨 Create a MediaPlayer class with:
// - playFile(media: MediaFile): string
// - Parameter type must be MediaFile (the base class)
// - Returns that media file's play result string
//
// Expected results:
// playFile(new MediaFile('file.mp3'))  → "Playing file.mp3"
// playFile(new AudioFile('song.mp3')) → "Playing audio: song.mp3"
// playFile(new VideoFile('movie.mp4')) → "Playing video: movie.mp4"

// Optional smoke test:
// const player = new MediaPlayer()
// console.log(player.playFile(new AudioFile('song.mp3')))
// console.log(player.playFile(new VideoFile('movie.mp4')))

// 🐨 Export MediaFile, AudioFile, VideoFile, and MediaPlayer
// export { MediaFile, AudioFile, VideoFile, MediaPlayer }
