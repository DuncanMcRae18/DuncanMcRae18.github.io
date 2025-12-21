using System;
using System.IO;
using System.IO.Compression;
using System.Reflection;

class Program
{
    static int Main(string[] args)
    {
        try
        {
            string baseDir = AppContext.BaseDirectory;
            string b64Path = Path.Combine(baseDir, "zip.b64");
            if (!File.Exists(b64Path))
            {
                Console.Error.WriteLine("Missing embedded payload: zip.b64");
                return 2;
            }

            string target = Environment.ExpandEnvironmentVariables("%LocalAppData%\\Programs\\PDFcombine");
            Directory.CreateDirectory(target);

            string tmp = Path.Combine(Path.GetTempPath(), "PDFcombine_payload.zip");
            var b64 = File.ReadAllText(b64Path);
            File.WriteAllBytes(tmp, Convert.FromBase64String(b64));

            ZipFile.ExtractToDirectory(tmp, target, true);

            Console.WriteLine($"Installed to: {target}");

            bool runAfter = true;
            if (args.Length > 0 && args[0] == "/nrun") runAfter = false;

            if (runAfter)
            {
                string exe = Path.Combine(target, "PDFcombine.exe");
                if (File.Exists(exe))
                {
                    var p = System.Diagnostics.Process.Start(new System.Diagnostics.ProcessStartInfo { FileName = exe, WorkingDirectory = target });
                    return 0;
                }
                else
                {
                    Console.Error.WriteLine("Installed files missing executable.");
                    return 3;
                }
            }

            return 0;
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine(ex.ToString());
            return 1;
        }
    }
}
