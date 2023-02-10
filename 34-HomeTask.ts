// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio

// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM

// Описание интерфейса, в котором:
// name - строка
// type - один из перечисления выше
// format = один из перечисления выше
// subtitles - необязательное поле типа строка
// marks - необязательное поле неизвестного типа
enum TypesOfMedia {
	Video = "video",
	Audio = "audio",
}
enum FormatsOfMedia {
	MP4 = ".mp4",
	MV = ".mv",
	MKV = ".mkv",
	FLV = ".flv",
	WEBM = ".webM",
}
interface IMedia {
	name: string;
	type: TypesOfMedia;
	format: FormatsOfMedia;
	subtitles?: string;
	marks?: unknown;
}

function playMedia(
	{ name, type, format, subtitles, marks }: IMedia = {
		name: "example",
		type: TypesOfMedia.Video,
		format: FormatsOfMedia.MP4,
	}
): string {
	let marksLog: string;
	if (typeof marks === "string") {
		marksLog = marks;
	} else if (Array.isArray(marks)) {
		marksLog = marks.join(" ");
	} else {
		marksLog = "Unsupported type of marks";
	}
	console.log(`Media ${name}${format} is ${type}
    Marks: ${marksLog}
    Subtitles: ${subtitles ?? "none"}`);

	return "Media started";
}

playMedia({
	name: "WoW",
	format: FormatsOfMedia.MV,
	type: TypesOfMedia.Audio,
	subtitles: "testowy test",
	marks: ["4:30", "5:40"],
});
