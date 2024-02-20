namespace PralHub.Models
{
    public class VideoModel
    {
        public int Id { get; set; }

        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string AuthorId { get; set; } = string.Empty;

        public string VideoUrl { get; set; } = string.Empty;
        public string ThumbanilUrlImg {  get; set; } = string.Empty; 

        public int Views { get; set; } = 0;
        public int Likes { get; set; } = 0;
        public int Unlikes { get; set; } = 0;

        public VideoModel() { }

    }
}
