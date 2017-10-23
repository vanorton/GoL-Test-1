using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoL_Test_1.Models
{
    public class World
    {
        public int[] WorldArray { get; }
        public World(Coordinates[] startValues)
        {
            WorldArray = new int[250000];
            foreach (var item in startValues)
            {
                WorldArray[item.XPosition * item.YPosition] = 1;
            }
        }
    }
}
