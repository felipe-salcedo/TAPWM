using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pclasses
{
    internal class Horista : Empregado
    {
        public double SalarioHora { get; set; }
        public double NumeroHora { get; set; }
        public int DiasFalta { get; set; }

        public override int TempoTrabalho()
        {
            TimeSpan span = DateTime.Today.Subtract(DataEntradaEmpresa);

            return (Convert.ToInt32(span.Days) - DiasFalta);
        }

        public override double SalarioBruto()
        {
            return SalarioHora * NumeroHora;
        }
    }
}
