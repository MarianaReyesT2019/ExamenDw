USE [master]
GO

/****** Object:  Database [Examen]    Script Date: 30/09/2023 12:15:10 ******/
CREATE DATABASE [ExamenDW]

CREATE TABLE teachers (
    teacher_id INT PRIMARY KEY,
    first_name VARCHAR(50) null,
    last_name VARCHAR(50) null,
    email VARCHAR(100) null,
    subject VARCHAR(100) null,
    hire_date DATE
);
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


